javascript:function extractReleaseNotes(){
/*
This script extracts release notes from a JIRA issue navigator page.
> Open your project
> Project settings (lower left corner)
> Versions
> Click on your version
> Click on "View in Issue Navigator"
> Run this bookmarklet (as often as you want)
> Copy the release notes text from the appearing textarea
*/
var issueTable = document.getElementById('issuetable');
var issueRows = issueTable.getElementsByTagName('tr');
var issuesMap = new Map();
var fixVersion = null;
var fixVersionLikely = null;
for (var i=0; i<issueRows.length; i++) {
  var issueRow = issueRows[i];
  if (issueRow.classList.contains('rowHeader')) continue;
  var issueKey = issueRow.querySelector('td.issuekey a').innerHTML;
  var summaryAs = issueRow.querySelectorAll('td.summary p a'); /*for subtasks the last a-tag is the correct one*/
  var summary = summaryAs[summaryAs.length-1].innerHTML;
  var fixVersions = issueRow.querySelectorAll('td.fixVersions a'); /*for multiple versions the last version is likely the correct one*/
  if (fixVersion == null) {
    if (fixVersions.length == 1) {
      fixVersion = fixVersions[0].innerHTML;
      console.log(fixVersion);
    } else if (fixVersions.length > 1) {
      fixVersionLikely = fixVersions[fixVersions.length-1].innerHTML;
    }
  }
  var line = '- ' + summary + ' (' + issueKey + ')\n';
  var numericKey = issueKey.split('-')[1];
  issuesMap.set(numericKey, line);
}

var issuesMapSorted = new Map([...issuesMap.entries()].sort().reverse());
var lines = '';
for (var [key, value] of issuesMapSorted) {
  lines += value;
}
fixVersion = fixVersion == null ? fixVersionLikely : fixVersion;
var output = 'Version ' + fixVersion + '\n----------------------\n' + lines;
var outputPre = document.getElementById('output-pre');
if (outputPre) outputPre.parentNode.removeChild(outputPre);
outputPre = document.createElement('textarea');
outputPre.id = 'output-pre';
outputPre.setAttribute('rows', issueRows.length+2 + '');
outputPre.setAttribute('cols', '200');
var outputNode = document.createTextNode(output);
outputPre.appendChild(outputNode);
issueTable.parentNode.appendChild(outputPre);
location.href = '#output-pre';
}
extractReleaseNotes();

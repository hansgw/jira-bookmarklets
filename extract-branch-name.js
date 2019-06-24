javascript:function extractBranchName(){
/*
This script extracts a branch name for a version control system from a JIRA issue details page.
> Open your project
> Open the issue details page you want
> Run this bookmarklet (as often as you want)
> Copy the branch name from the appearing message box
*/
var maxLength = 100;
var separator = '/';
var type = document.getElementById('type-val').innerText.trim();
var prefix;
switch (type) {
 case 'Bogue': /*fr*/
 case 'Bug': /*en*/
 case 'Error': /*es*/
 case 'Fehler': /*de*/
 case 'バグ': /*jp*/
 prefix = 'defect';
 break;
 default:
 prefix = 'feature';
}
var rawBranchName = prefix + separator + document.getElementById('key-val').innerText.trim() + separator + document.getElementById('summary-val').innerText.trim();
var safeBranchName = rawBranchName.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace('','').replace(/[^A-Za-z0-9!\/]/g,'-').replace(/-+/g,'-').substring(0, maxLength);
var ignore = window.prompt('Branch name: ' + safeBranchName, safeBranchName);
}
extractBranchName();

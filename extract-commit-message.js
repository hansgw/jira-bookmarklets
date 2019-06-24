javascript:function extractCommitMessage(){
/*
This script extracts a commmit message for a version control system from a JIRA issue details page.
> Open your project
> Open the issue details page you want
> Run this bookmarklet (as often as you want)
> Copy the commit message from the appearing message box
*/
var separator = ': ';
var commitMessage = document.getElementById('key-val').innerText.trim() + separator + document.getElementById('summary-val').innerText.trim();
var ignore = window.prompt('Commit message: ' + commitMessage, commitMessage);
void 0
}
extractCommitMessage();

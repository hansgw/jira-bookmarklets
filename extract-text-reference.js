javascript:function copyTextReference(){
/*
This script extracts a human readable text reference with url and summary e.g. for use in e-mail or chat from a JIRA issue details page.
> Open your project
> Open the issue details page you want
> Run this bookmarklet (as often as you want)
> Copy the text reference from the appearing message box
*/
var textReference = document.getElementById('type-val').innerText.trim() + ' (' + document.getElementById('priority-val').innerText.trim() + '): ' + document.getElementById('summary-val').innerText.trim() + ' - ' + location.href;
var ignore = window.prompt('Copy the text reference: ' + textReference, textReference);
void 0
}
copyTextReference();

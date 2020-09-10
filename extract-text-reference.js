javascript:function copyTextReference(){
/*
This script extracts a human readable text reference with url and summary e.g. for use in e-mail or chat from a JIRA issue details page.
> Open your project
> Open the issue details page you want
> Run this bookmarklet (as often as you want)
> Copy the text reference from the appearing message box
*/
var textReference = location.href + ' ' + document.getElementById('summary-val').innerText.trim();
var ignore = window.prompt('Copy the text reference: ' + textReference, textReference);
void 0
}
copyTextReference();

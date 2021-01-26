javascript:function copyTextReference(){
/*
This script extracts a human readable text reference with url and summary e.g. for use in e-mail or chat from a JIRA issue details page.
> Open your project
> Open the issue details page you want
> Run this bookmarklet (as often as you want)
> Copy the text reference from the appearing message box
*/

function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  var button = document.createElement('button');
  textArea.id = 'input';
  button.id = 'copy';
  textArea.value = text;
  document.body.appendChild(textArea);
  document.body.appendChild(button);
  document.querySelector("#copy").addEventListener("click", copy);
  document.body.removeChild(textArea);
}

var textReference = document.getElementById('type-val').innerText.trim() + ' (' + document.getElementById('priority-val').innerText.trim() + '): ' + document.getElementById('summary-val').innerText.trim() + ' - ' + location.href;
/*var ignore = window.prompt('Commit message: ' + textReference, textReference);*/
copyTextToClipboard(textReference);
void 0
}
copyTextReference();

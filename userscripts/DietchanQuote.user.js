// ==UserScript==
// @name         # Dietchan Quote
// @namespace    spsDietchanQuote
// @description  Select text and click Post ID
// @version      1.0.1
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      /^https?://dietchan.org/(c|meta|fefe)/[0-9]{1,8}$/
// @include      /^https?://dietchankez4ypnhpw2m2b27wdtsxw6jjckdizupysxntjslijbxubad.onion/(c|meta|fefe)/[0-9]{1,8}$/
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function suppressConsoleOutput(e) {
    //we don't log here
};
var script = document.createElement("script");
script.innerHTML = "function quote(postID) {\n var quoteChevron = \">\";\n var replyBox = document.querySelectorAll(\'textarea[name=\"text2\"]\');\n var selectedTxt = window.getSelection().toString();\n var quoteLength = selectedTxt.length;\n if (quoteLength === 0) {\n  quoteChevron = \"\";\n } else if (quoteLength > 0) {\n  selectedTxt = selectedTxt + \"\\n\"\n }\n var populateBox = replyBox[0].value=replyBox[0].value + \">>\" + postID + \"\\n\" + quoteChevron + selectedTxt;\n\n}\n";
function auaMeinArsch(postIDnode) {
	var matchPostID = /[0-9]{1,8}/g;
	try {
		var matchedPostIDs = postIDnode.innerHTML.match(matchPostID)
				var newTxtDivNode = postIDnode.innerHTML.replace(matchedPostIDs, '<a href="javascript:quote(' + matchedPostIDs + ');" title="Antworten">' + matchedPostIDs + '</a>');
				postIDnode.innerHTML = newTxtDivNode;
		} catch (e) {
			suppressConsoleOutput(e);
		}
}

function searchPostIDs() {
	var postIDarray = document.querySelectorAll('span[class="number"]');
	postIDarray.forEach((postIDnode) => auaMeinArsch(postIDnode));
}
document.head.appendChild(script);
//document.body.appendChild(script);
searchPostIDs();
/*function quote(postID) {
 var quoteChevron = ">";
 var replyBox = document.querySelectorAll('textarea[name="text2"]');
 var selectedTxt = window.getSelection().toString();
 var quoteLength = selectedTxt.length;
 if (quoteLength === 0) {
  quoteChevron = "";
 } else if (quoteLength > 0) {
  selectedTxt = selectedTxt + "\n"
 }
 var populateBox = replyBox[0].value=replyBox[0].value + ">>" + postID + "\n" + quoteChevron + selectedTxt;

}*/

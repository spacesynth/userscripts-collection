// ==UserScript==
// @name         # Dietchan Links
// @namespace    spsDietchanLinks
// @description  Parse and tag the URIs
// @version      1.0.4
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://dietchan.org/*
// @include      *://dietchankez4ypnhpw2m2b27wdtsxw6jjckdizupysxntjslijbxubad.onion/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function suppressConsoleOutput(e) {
    //we don't log here
};
function auaMeinArsch(txtDivNode) {
	var compliantURIs = /https?\:\/\/[A-Za-z0-9-]{0,255}\.?[A-Za-z0-9-]{1,63}?\.[A-Za-z]{2,6}\/[A-Za-z0-9-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\;\%\=]{0,2048}/g;
	try {
		var matchedURIs = txtDivNode.innerHTML.match(compliantURIs)
		try {
			var countedMatches = matchedURIs.length;
			for (var i = 0; i < countedMatches; i++) {
				var newTxtDivNode = txtDivNode.innerHTML.replace(matchedURIs[i], '<a href="' + matchedURIs[i] + '" target="_blank" rel="noopener noreferrer">' + matchedURIs[i] + '</a>');
				txtDivNode.innerHTML = newTxtDivNode;
			}
		} catch (e) {
			suppressConsoleOutput(e);
		}
	} catch (e) {
		suppressConsoleOutput(e);
	}
}

function searchTxtDivs() {
	var txtDivsArray = document.querySelectorAll('div[class="text"]');
	txtDivsArray.forEach((txtDivNode) => auaMeinArsch(txtDivNode));
}
searchTxtDivs();

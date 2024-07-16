// ==UserScript==
// @name         # Dietchan Links
// @namespace    spsDietchanLinks
// @description  Parse and tag the URIs
// @version      1.0.3
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
function auaMeinArsch(element) {
	var myExp = /https?\:\/\/[A-Za-z0-9-]{0,255}\.?[A-Za-z0-9-]{1,63}?\.[A-Za-z]{2,6}\/[A-Za-z0-9-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\;\%\=]{0,2048}/g;
	try {
		var myMatch = element.innerHTML.match(myExp)
		try {
			var myRuns = myMatch.length;
			for (var i = 0; i < myRuns; i++) {
				var newTxt = element.innerHTML.replace(myMatch[i], '<a href="' + myMatch[i] + '" target="_blank" rel="noopener noreferrer">' + myMatch[i] + '</a>');
				element.innerHTML = newTxt;
			}
		} catch (e) {
			suppressConsoleOutput(e);
		}
	} catch (e) {
		suppressConsoleOutput(e);
	}
}

function clicker(myStr) {
	var array1 = document.querySelectorAll('div[class="text"]');
	array1.forEach((element) => auaMeinArsch(element));
}
clicker();

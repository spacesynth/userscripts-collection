// ==UserScript==
// @name         # Dietchan Links
// @namespace    spsDietchanLinks
// @description  Parse and tag the URIs
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://dietchan.org/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function auaMeinArsch(element) {
	var myExp = /https?\:\/\/[A-Za-z0-9-]{0,255}\.?[A-Za-z0-9-]{1,63}?\.[A-Za-z]{2,6}\/[A-Za-z0-9-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\;\%\=]{0,2048}/g;
	try {
		var myMatch = element.innerHTML.match(myExp)
		console.log(myMatch);
		try {
			var newTxt = element.innerHTML.replace(myExp, '<a href="' + myMatch[0] + '" target="_blank">' + myMatch[0] + '</a>');
			element.innerHTML = newTxt
		} catch (e) {
			//exception handling is for cowards
		}
	} catch (e) {
		//exception handling is for cowards
	}
}
function clicker(myStr) {
	var array1 = document.querySelectorAll('div[class="text"]');
	array1.forEach((element) => auaMeinArsch(element));
}
clicker();

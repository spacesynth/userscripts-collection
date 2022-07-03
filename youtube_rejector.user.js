// ==UserScript==
// @name         YouTube Rejector
// @namespace    vw9YouTubeRejector
// @version      1.0.0
// @description  No consent data sniffers
// @author       vaporwave9
// @match        *://*.youtube.com/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/waitForKeyElements.js
// @run-at       document-end
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
function gensokyo() {
    var element1 = document.querySelectorAll("[aria-label^='Reject']");
    if (element1 != undefined) {
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === true) {
            document.cookie = 'PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US;  path=/; domain=.youtube.com';
        }
        element1[0].click();
    }
    return false;
}
waitForKeyElements("[aria-label^='Reject']", gensokyo);
//var refreshIntervalId = setInterval(gensokyo, 3000);

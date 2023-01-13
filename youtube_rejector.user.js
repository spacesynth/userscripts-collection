// ==UserScript==
// @name         YouTube Rejector
// @namespace    vw9YouTubeRejector
// @version      1.4.0
// @description  No consent data sniffers
// @updateURL    https://github.com/vaporwave9/userscripts-collection/edit/master/youtube_rejector.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/edit/master/youtube_rejector.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://*.youtube.com/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/waitForKeyElements.js
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
function gensokyo() {
    var element1 = document.querySelectorAll("[aria-label^='Reject the use of cookies']");
    if (element1 != undefined) {
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === true) {
            document.cookie = 'PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US;  path=/; domain=.youtube.com';
            element1[0].click();
        }
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === false) {
            var ragemode = document.querySelector("ytd-app")
            if (ragemode.isAppDarkTheme() === false) {
                //ragemode.onDarkModeToggledAction()
            }
            element1[0].click();
        }
    }
    return false;
}

waitForKeyElements("[aria-label^='Reject the use of cookies']", gensokyo);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);

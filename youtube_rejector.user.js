// ==UserScript==
// @name         YouTube Rejector
// @namespace    vw9YouTubeRejector
// @version      1.4.1
// @description  No consent data sniffers
// @updateURL    https://github.com/spacesynth/userscripts-collection/edit/master/youtube_rejector.user.js
// @downloadURL  https://github.com/spacesynth/userscripts-collection/edit/master/youtube_rejector.user.js
// @supportURL   https://github.com/spacesynth/userscripts-collection/issues
// @author       spacesynth
// @match        *://*.youtube.com/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/waitForKeyElements.js
// @run-at       document-start
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
function gensokyo() {
    if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === true) {
        var element1 = document.querySelectorAll("[aria-label='Reject all']");
        document.cookie = 'PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US;  path=/; domain=.youtube.com';
        if (element1 != undefined) {
            element1[0].click();
        }
    }
    if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === false) {
        var element2 = document.querySelectorAll("[aria-label^='Reject the use of cookies']");
        var ragemode = document.querySelector("ytd-app")
        if (ragemode.isAppDarkTheme() === false) {
            //ragemode.onDarkModeToggledAction()
            //document.getElementsByTagName("html")[0].setAttribute("dark", "true");
        }
        if (element2 != undefined) {
            element2[0].click();
        }
    }
    return false;
}

waitForKeyElements("[aria-label^='Reject']", gensokyo);
window.addEventListener("yt-navigate-finish", gensokyo);
window.addEventListener("spfdone", gensokyo);

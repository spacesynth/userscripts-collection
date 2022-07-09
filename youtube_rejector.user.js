// ==UserScript==
// @name         YouTube Rejector
// @namespace    vw9YouTubeRejector
// @version      1.1.2
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
var fired = 0;

function gensokyo3() {
    var player = document.getElementById("movie_player")
    if (player != null) {
        if (document.visibilityState === 'visible' && fired < 1) {
            if (player.getPlayerState() == 1) {
                fired += 1;
                console.log("fired!");
            } else if (player.getPlayerState() != 1) {
                player.playVideo();
            }
        }
    }
}

function gensokyo() {
    var element1 = document.querySelectorAll("[aria-label^='Reject']");
    if (element1 != undefined) {
        if (/https\:\/\/(?=consent).*\.youtube\..*/.test(window.location.href) === true) {
            document.cookie = 'PREF=tz=Europe.Berlin&f5=30000&f6=400&gl=US;  path=/; domain=.youtube.com';
        }
        element1[0].click();
    }
    fired += 1;
    gensokyo3()
    return false;
}
function gensokyo2() {
    if (fired > 0) {
        clearInterval(refreshIntervalId);
    } else {
        var aTags2 = document.getElementsByTagName("a");
        for (var j = 0; j < aTags2.length; j++) {
            if (aTags2[j].textContent == "Reject all") {
                aTags2[j].click();
                fired += 1;
            }
        }
    }
    gensokyo3()
}
waitForKeyElements("[aria-label^='Reject']", gensokyo);
var refreshIntervalId = setInterval(gensokyo2, 100);

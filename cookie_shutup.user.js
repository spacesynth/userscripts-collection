// ==UserScript==
// @name         Cookie Shut Up 2023
// @namespace    vw9CookieShutUp2023
// @version      1.1.0
// @description  Tell Google to bugger off
// @updateURL    https://github.com/spacesynth/userscripts-collection/raw/master/cookie_shutup.user.js
// @downloadURL  https://github.com/spacesynth/userscripts-collection/raw/master/cookie_shutup.user.js
// @supportURL   https://github.com/spacesynth/userscripts-collection/issues
// @author       spacesynth
// @include      *://*.google.tld/*
// @run-at       document-end
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

'use strict';
var loc = window.location.href.toString();
var myCaptureGroup = loc.match(/.*?continue=(.*)/);

function gensokyo() {
    console.log("script 1 active");
    var aTags4 = document.getElementsByTagName("div");
    for (var l = 0; l < aTags4.length; l++) {
        if (aTags4[l].textContent == "Alle ablehnen") {
            clearInterval(refreshIntervalId);
            aTags4[l].click();
        }
    }
}

function gensokyo2() {
    console.log("script 2 active");
    var aTags6 = document.getElementsByTagName("span");
    for (var i = 0; i < aTags6.length; i++) {
        if (aTags6[i].textContent == "Alle ablehnen") {
            aTags6[i].click();
        }
    }
}
if (loc.indexOf("m?continue=") != -1) {
    window.open(loc.replace(/\m\?continue=/, 'd?continue='), "_self");
}
if (/https\:\/\/(?=consent).*\.google\..*/.test(window.location.href) === true) {
    var refreshIntervalId2 = setInterval(gensokyo2, 200);
}
if (/https\:\/\/(?!consent).*\.google\..*/.test(window.location.href) === true) {
    var refreshIntervalId = setInterval(gensokyo, 100);
}

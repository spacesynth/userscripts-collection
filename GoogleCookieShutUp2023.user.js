// ==UserScript==
// @name         # Google Cookie Shut Up 2023
// @namespace    spsGoogleCookieShutUp2023
// @description  Tell Google to bugger off
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://*.google.tld/*
// @run-at       document-end
// @grant        none
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
            clearInterval(refreshIntervalId2);
            aTags6[i].click();
        }
    }
}
if (loc.indexOf("m?continue=") != -1) {
    window.open(loc.replace(/\m\?continue=/, 'd?continue='), "_self");
}
if (/https\:\/\/(?=consent).*\.google\..*/.test(window.location.href) === true) {
    var refreshIntervalId2 = setInterval(gensokyo2, 100);
}
if (/https\:\/\/(?!consent).*\.google\..*/.test(window.location.href) === true) {
    var refreshIntervalId = setInterval(gensokyo, 100);
}

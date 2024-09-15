// ==UserScript==
// @name         # Google Auto Disable SafeSearch & Cookies
// @namespace    spsGoogleAutoDisableSafeSearch
// @description  Screw Safe Search
// @version      1.0.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      http*://www.google.tld/*
// @exclude      http*://www.google.*/maps*
// @exclude      http*://www.google.*/search*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var url = window.location.href;
var a;

//user consent blocked cookies blocked
if (url.indexOf("ucbcb=1") == -1) {
    if (url.indexOf("safe=off") == -1) {
        url = url + "&safe=off&ucbcb=1";
        window.location = url;
    }
}
if (url.indexOf("ucbcb=1") == -1) {
    url = url + "&ucbcb=1";
    window.location = url;
}
if (url.indexOf("safe=off") == -1) {
    url = url + "&safe=off";
    window.location = url;
}

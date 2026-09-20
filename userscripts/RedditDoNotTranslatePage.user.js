// ==UserScript==
// @name         # Reddit Do Not Translate Page
// @namespace    spsRedditDoNotTranslatePage
// @description  Screw machine translated content
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://*.reddit.com/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function fixPredditURIs() {
    var sanitzedURI;
    var loc = window.location.href.toString();
    var myCaptureGroup1 = loc.match(/https:\/\/www\.reddit\.com\/(.*\/comments\/.*)/);
    if (myCaptureGroup1 !== null) {
        if (/https:\/\/www\.reddit\.com\/.*\/comments\/.*\?tl=[a-z]{2}/.test(window.location.href) === true) {
            //do not translate pages with AI
            sanitzedURI = myCaptureGroup1[1].replace(/\?tl=[a-z]{2}/, '');
            window.open("https://www.reddit.com/" + decodeURIComponent(sanitzedURI), "_self");
        }
    }
}
fixPredditURIs();

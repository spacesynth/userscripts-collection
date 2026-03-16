// ==UserScript==
// @name         # Reddit Old Design Please
// @namespace    spsRedditOldDesignPlease
// @description  Predditors are no longer winning
// @version      1.1.2
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
    var myCaptureGroup2 = loc.match(/https:\/\/old\.reddit\.com\/(.*)/);
    if (myCaptureGroup1 !== null) {
        if (/https:\/\/www\.reddit\.com\/(.*\/comments\/.*)/.test(window.location.href) === true) {
            //do not translate pages with AI
            sanitzedURI = myCaptureGroup1[1].replace(/\?tl=[a-z]{2}/, '');
            window.open("https://old.reddit.com/" + decodeURIComponent(sanitzedURI), "_self");
        }
    }
    else if (myCaptureGroup2 !== null) {
        if (/https:\/\/old\.reddit\.com\/(.*\/comments\/.*)/.test(window.location.href) === false) {
            window.open("https://www.reddit.com/" + decodeURIComponent(myCaptureGroup2[1]), "_self");
        }
    }
}
fixPredditURIs();

function fixPredditLinks() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].slot === 'full-post-link') {
            if (/.*\/comments\/.*/.test(anchors[i].href) === true) {
                anchors[i].target = anchors[i].target.replace('_self', '_blank');
            }
        }
    }
}
var refreshIntervalId2 = setInterval(fixPredditLinks, 100);

// ==UserScript==
// @name         # Reddit Old Design Please
// @namespace    spsRedditOldDesignPlease
// @description  Predditors are no longer winning
// @version      1.1.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://*.reddit.com/r/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function fixPredditURIs() {
    var loc = window.location.href.toString();
    var myCaptureGroup = loc.match(/https:\/\/www\.reddit\.com\/(.*\/comments\/.*)/);
    var myCaptureGroup2 = loc.match(/https:\/\/old\.reddit\.com\/(.*)/);
    if (myCaptureGroup !== null || myCaptureGroup2 !== null) {
        if (/https:\/\/www\.reddit\.com\/(.*\/comments\/.*)/.test(window.location.href) === true) {
            window.open("https://old.reddit.com/" + decodeURIComponent(myCaptureGroup[1]), "_self");
        } else if (myCaptureGroup2 !== null) {
            if (/https:\/\/old\.reddit\.com\/(.*\/comments\/.*)/.test(window.location.href) === false) {
                window.open("https://www.reddit.com/" + decodeURIComponent(myCaptureGroup2[1]), "_self");
            }
        }
    }
}
fixPredditURIs();

function fixPredditLinks() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        if (/https:\/\/(old|www)\.reddit\.com\/(.*\/comments\/.*)/.test(anchors[i].href) === false) {
            anchors[i].href = anchors[i].href.replace(/https:\/\/old\.reddit\.com\/(.*)/, 'https://www.reddit.com/$1');
        }
        if (/https:\/\/www\.reddit\.com\/(.*\/comments\/.*)/.test(anchors[i].href) === true) {
            anchors[i].href = anchors[i].href.replace(/https:\/\/www\.reddit\.com\/(.*)/, 'https://old.reddit.com/$1');
        }
    }
}
var refreshIntervalId2 = setInterval(fixPredditLinks, 100);

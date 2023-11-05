// ==UserScript==
// @name         # Blog Fefe Links
// @namespace    spsBlogFefeLinks
// @description  Expose the URIs
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @include      *://blog.fefe.de/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function fixPredditLinks() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        if (i >= 3) {
        var domain = /^(?:http|https):\/\/(?:www\.)?([a-zA-Z0-9.]*).*$/.exec(anchors[i]);
        anchors[i].innerHTML = anchors[i].innerHTML + " (" + domain[1] + ")"
}}}
fixPredditLinks();

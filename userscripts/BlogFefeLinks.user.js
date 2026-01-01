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

//use on https://blog.fefe.de/?css=paper.css
'use strict';
function fixHefeLinks() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        if (i >= 3) {
        var domain = /^(?:http|https):\/\/(?:www\.)?([a-zA-Z0-9\.\-]*).*$/.exec(anchors[i]);
        if (domain[1] != "blog.fefe.de") {
        anchors[i].innerHTML = anchors[i].innerHTML + " (" + domain[1] + ")"
        }
        else {
        anchors[i].innerHTML = anchors[i].innerHTML + " 🐗"
        }
}}}
fixHefeLinks();

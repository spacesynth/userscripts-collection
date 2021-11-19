// ==UserScript==
// @name         Youtube Small Thumbnails - Normal Size
// @namespace    YoutubeSmallThumbnails
// @version      1.1.1
// @description  Shrink ugly huge thumbnails
// @updateURL    https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_small_thumbnails.user.js
// @downloadURL  https://github.com/vaporwave9/userscripts-collection/raw/master/youtube_small_thumbnails.user.js
// @supportURL   https://github.com/vaporwave9/userscripts-collection/issues
// @author       vaporwave9
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/vaporwave9/userscripts-collection/master/icon.png
// @noframes
// ==/UserScript==

function CSS_loadstyle(e) {
    const t = (document.getElementById("CustomCSSwrapper") || function() {
        const e = document.createElement("style");
        return e.type = "text/css", e.id = "CustomCSSwrapper", document.head.appendChild(e), e
    }()).sheet;
    t.insertRule(e, (t.rules || t.cssRules || []).length)
}

CSS_loadstyle('ytd-rich-grid-renderer { --ytd-rich-grid-items-per-row: 6 !important; --ytd-rich-grid-posts-per-row: 6 !important; --ytd-rich-grid-slim-items-per-row: 6 !important; }');
CSS_loadstyle('ytd-rich-grid-renderer > #contents > ytd-rich-grid-row, ytd-rich-grid-renderer > #contents > ytd-rich-grid-row > #contents { display: contents; }');
CSS_loadstyle('ytd-rich-item-renderer { min-width: 210px; }');
CSS_loadstyle('#avatar-link { display: none; }');
CSS_loadstyle('#video-title { font-size: 1.4rem !important; }');
CSS_loadstyle('#channel-name.ytd-video-meta-block { font-size: 1.3rem !important; }');
CSS_loadstyle('#metadata-line { font-size: 1.3rem !important; }');
CSS_loadstyle('.ytd-mini-guide-renderer { display: none; }');
CSS_loadstyle('.ytd-video-renderer:not([use-prominent-thumbs]) ytd-thumbnail.ytd-video-renderer { flex: none; width: 246px; height: 138px; }');
CSS_loadstyle('ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer { max-width: 246px; min-width: 240px; }');
CSS_loadstyle('ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer { max-width: 246px; min-width: 240px; }');

const sheet = document.getElementById("CustomCSSwrapper").sheet,
    rules = sheet.rules || sheet.cssRules;
for (let e = 0; e < rules.length; e++) document.querySelector("pre").innerHTML += rules[e].cssText + "\n";

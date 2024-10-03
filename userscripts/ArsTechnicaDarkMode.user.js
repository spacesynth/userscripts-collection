// ==UserScript==
// @name         # ArsTechnica Dark Mode
// @namespace    spsArsTechnicaDarkMode
// @description  Automatically turn on dark mode on Ars
// @version      1.0.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.arstechnica.com/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

(function() {
'use strict';
if (document.cookie.includes('xf_style_id=5') == false){
    document.cookie = "xf_style_id=5; path=/";
    document.cookie = "view=list; path=.";
    location.reload();
    console.log("this only runs once per session");
}})();

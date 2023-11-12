// ==UserScript==
// @name         # ArsTechnica Dark Mode
// @namespace    spsArsTechnicaDarkMode
// @description  Automatically turn on dark mode on Ars
// @version      1.0.0
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
if (document.cookie.includes('theme=dark') == false){
    document.cookie = "theme=dark; path=/";
    location.reload();
    console.log("this only runs once per session");
}})();

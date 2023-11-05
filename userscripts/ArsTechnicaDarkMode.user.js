// ==UserScript==
// @name         # ArsTechnica Dark Mode
// @namespace    spsArsTechnicaDarkMode
// @description  Automatically turn on dark mode on Ars
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://arstechnica.com/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function cookieMaker() {
    if (document.cookie.includes('theme=dark') == false){
    var a = "theme=dark;";
    var b = a.split(";");
        for(var c=0; c<b.length; c++){
            document.cookie = b[c]+"; path=/";
        }
        location.reload();
        console.log("this only runs once per session");
    }
}
cookieMaker();

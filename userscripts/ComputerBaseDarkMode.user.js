// ==UserScript==
// @name         # ComputerBase Dark Mode
// @namespace    spsComputerBaseDarkMode
// @description  Automatically turn on dark mode on CB
// @version      1.0.3
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://www.computerbase.de/*
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function cookieMaker() {
    if (document.cookie.includes('xf_style_variation=alternate') == false) {
        var a = "xf_style_variation=alternate; no-fixed-header=1; consent-v2=0; desktop-layout=1; home-layout=2";
        var b = a.split(";");
        for (var c = 0; c < b.length; c++) {
            document.cookie = b[c] + "; path=/";
        }
        location.reload();
        console.log("this only runs once per session");
    }
}
cookieMaker();

function gensokyo() {
    var element1 = document.querySelector('[title="Anzeige ausblenden"]');
    if (element1 != undefined) {
        element1.click();
    }
    return true;
}
waitForKeyElements('[title="Anzeige ausblenden"]', gensokyo);

// ==UserScript==
// @name         # Imgur No Beta
// @namespace    spsImgurNoBeta
// @description  Activate classic Imgur design
// @version      1.0.1
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://imgur.com/*
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function cookieMaker() {
    if (document.cookie.includes('frontpagebetav2=0') == false) {
        if (document.cookie.includes('postpagebeta=0') == false) {
            var a = "frontpagebetav2=0;postpagebeta=0";
            var b = a.split(";");
            for (var c = 0; c < b.length; c++) {
                document.cookie = b[c] + "; path=/";
            }
            location.reload();
            console.log("this only runs once per session");
        }
    }
}
cookieMaker();

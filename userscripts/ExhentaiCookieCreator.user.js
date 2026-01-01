// ==UserScript==
// @name         # Exhentai Cookie Creator
// @namespace    spsExhentaiAutoLogin
// @description  Automatically create your login cookie
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        https://e-hentai.org/*
// @match        https://exhentai.org/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function cookieMaker() {
    var a = "ipb_member_id=1234567; ipb_pass_hash=aabbccddeeff00112233445566778899; sl=dm_1; nw=1";
    var b = a.split(";");
    for (var c = 0; c < b.length; c++) {
        document.cookie = b[c] + "; path=/";
    }
}
cookieMaker();

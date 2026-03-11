// ==UserScript==
// @name         # Exhentai Cookie Creator
// @namespace    spsExhentaiCookieCreator
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
    var a = "ipb_member_id=1234567; ipb_pass_hash=aabbccddeeff11223344556677889900; sl=dm_1; nw=1";
    var b = a.split(";");
    for (var c = 0; c < b.length; c++) {
        document.cookie = b[c] + "; path=/";
    }
}
cookieMaker();

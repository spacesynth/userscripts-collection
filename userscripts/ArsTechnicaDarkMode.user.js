// ==UserScript==
// @name         # ArsTechnica Dark Mode
// @namespace    spsArsTechnicaDarkMode
// @description  Automatically turn on dark mode on Ars
// @version      1.0.7
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.arstechnica.com/*
// @run-at       document-end
// @grant        GM_cookie
// @grant        GM.cookie
// @noframes
// ==/UserScript==

(function() {
'use strict';
if (document.cookie.includes('theme=dark') == false){
    document.cookie = "theme=dark; path=/";
    //document.cookie = "view=list; domain=.arstechnica.com";
    //document.cookie = "fw_view=off; domain=.arstechnica.com";
GM.cookie.delete({ name: 'fw_view' })
GM_cookie.set(
    {
        domain: ".arstechnica.com",
        hostOnly: true,
        httpOnly: false,
        name: "fw_view",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        value: "off"
    }
)
GM.cookie.delete({ name: 'view' })
GM_cookie.set(
    {
        domain: ".arstechnica.com",
        hostOnly: true,
        httpOnly: false,
        name: "view",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        value: "list"
    }
)
    location.reload();
}})();

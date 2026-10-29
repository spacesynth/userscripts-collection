// ==UserScript==
// @name         # Google Thoughtcrime (Store bypass cookies)
// @namespace    spsGoogleThroughtcrimeCommited
// @description  Doubleplusungood exemption cookie manager for sessions and temporary containers
// @version      1.1.3
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.google.com/*
// @run-at       document-start
// @grant        GM_cookie
// @grant        GM_getValue
// @grant        GM_setValue
// @noframes
// ==/UserScript==

(() => {
    'use strict';
    if (/^https\:\/\/www\.google\.com\/search.*/.test(window.location.href) == true) {
        const button = document.createElement("button");
        button.textContent = "Store a bypass cookie";
        button.style.cssText = "position:fixed;top:88px;right:10px;z-index:999999;padding:8px 12px;cursor:pointer;";
        button.addEventListener("click", () => {
            if (document.cookie.includes('GOOGLE_ABUSE_EXEMPTION') == true) {
                var match = document.cookie.match(new RegExp('GOOGLE_ABUSE_EXEMPTION=(.*);'));
                GM_setValue("used_at_least_once", true);
                GM_setValue("ingsoc_cookie", match[1]);
                GM_setValue("expire_cookie", Date.now());
            }
        });
        document.body.appendChild(button);
    }
    if (document.cookie.includes('GOOGLE_ABUSE_EXEMPTION') == false) {
        if (GM_getValue("used_at_least_once") === true) {
            GM_cookie.set({
                domain: ".google.com",
                hostOnly: true,
                httpOnly: false,
                name: "GOOGLE_ABUSE_EXEMPTION",
                path: "/",
                sameSite: "no_restriction",
                secure: true,
                session: false,
                value: GM_getValue("ingsoc_cookie"),
                expirationDate: Math.floor(GM_getValue("expire_cookie") / 1000) + (60 * 60 * 24 * 1) // Expires in 1 day
            });
        }
    }
    if (/https\:\/\/www\.google\.com\/sorry.*/.test(window.location.href) == true) {
        if (GM_getValue("used_at_least_once") === true) {
            GM_cookie.delete({
                name: 'GOOGLE_ABUSE_EXEMPTION'
            });
            GM_cookie.set({
                domain: ".google.com",
                hostOnly: true,
                httpOnly: false,
                name: "GOOGLE_ABUSE_EXEMPTION",
                path: "/",
                sameSite: "no_restriction",
                secure: true,
                session: false,
                value: GM_getValue("ingsoc_cookie"),
                expirationDate: Math.floor(GM_getValue("expire_cookie") / 1000) + (60 * 60 * 24 * 1) // Expires in 1 day
            });
        }
        const button2 = document.createElement("button");
        button2.textContent = "Try to skip w/ bypass";
        button2.style.cssText = "position:fixed;top:10px;left:10px;z-index:999999;padding:8px 12px;cursor:pointer;";
        button2.addEventListener("click", () => {
            var real_URI = decodeURIComponent(window.location.href).match(/https:\/\/www\.google\.com\/sorry\/index\?continue=(.*)(?=&q=.*)/);
            window.open(real_URI[1], "_self");
        });
        document.body.appendChild(button2);
    }
})();

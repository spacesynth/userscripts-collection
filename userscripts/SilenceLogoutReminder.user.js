// ==UserScript==
// @name         # Silence Logout Reminder
// @namespace    spsSilenceLogoutReminder
// @description  I don't even save cookies and localstorage
// @version      1.0.0
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// @require      https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/waitForKeyElements.js
// @license      WTFPL
// @match        *://mail.vodafone.de/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
var found;
var muellbutton;
var refreshIntervalId4;
var seek1 = "Verstanden";
function force_reject_all() {
    var aTags = document.getElementsByTagName("span");
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == seek1) {
            found = aTags[i];
            break;
        }
    }
    setTimeout(function() {
        found && found.click();
    }, 1000);
    console.log('this should stop firing now...')
    return true;
}
waitForKeyElements('div[class="p-dialog p-component logout-reminder-popup"]', refreshIntervalId4 = setInterval(force_reject_all, 1000));

// ==UserScript==
// @name         # YouTube Slop Detector
// @namespace    spsYouTubeSlopDetector
// @description  Red title on videos marked as slop-made
// @version      1.0.0
// @author       spacesynth
// @match        *://*.youtube.com/watch*
// @license      WTFPL
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @grant        GM_addStyle
// @run-at       document-end
// @noframes
// ==/UserScript==

const styles1 = `
h1.ytd-watch-metadata.style-scope{color: white !important;}
`;

const styles2 = `
h1.ytd-watch-metadata.style-scope{color: red !important;}
`;

function eatShit () {
    'use strict';
    GM_addStyle(styles1);
    var slopDetect = document.getElementsByClassName('ytwHowThisWasMadeSectionViewModelBodyHeader')[1].innerText;
    if (slopDetect == "Made with AI") {
        GM_addStyle(styles2);
    }
}
var refreshIntervalId2 = setInterval(eatShit, 1000);

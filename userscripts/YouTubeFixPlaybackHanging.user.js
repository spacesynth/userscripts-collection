// ==UserScript==
// @name         # YouTube Fix Playback Hanging (Firefox)
// @namespace    spsYouTubeFixPlaybackHanging
// @description  No more fake playback is hanging nonsense
// @version      1.0.2
// @author       spacesynth
// @supportURL   https://github.com/spacesynth/userscripts-collection
// @icon         https://raw.githubusercontent.com/spacesynth/userscripts-collection/master/utility/icon.png
// @license      WTFPL
// @match        *://*.youtube.com/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

'use strict';
function gensokyo4() {
    var player = document.getElementById("movie_player");
    if (player != null) {
        if (player.getPlayerState() == 3) {
            player.playVideo();
        }
    }
}
var refreshIntervalId4 = setInterval(gensokyo4, 200);

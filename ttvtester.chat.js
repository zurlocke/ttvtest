// ==UserScript==
// @name         ttvtest
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  ttvtesting
// @author       zurlocke
// @include      https://www.twitch.tv/directory/following
// @updateURL    https://github.com/zurlocke/ttvtest/raw/master/ttvtester.chat.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://cdn.betterttv.net/style/stylesheets/betterttv.css?6.8R44
// @require      https://cdn.betterttv.net/style/stylesheets/betterttv-dark.css?6.8R44
// ==/UserScript==

(function() {
    'use strict';

    $(".directory_header").prepend("<h2 class='title2'>Test123</h2>");
    $(".nav.js-nav").prepend("<li><a>Test123</a></li>");
})();

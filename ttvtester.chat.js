// ==UserScript==
// @name         ttvtest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ttvtesting
// @author       zurlocke
// @include      https://www.twitch.tv/directory/following
// @updateURL    https://github.com/zurlocke/ttvtest/raw/master/ttvtester.chat.js
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

$("nav.js-nav").prepend(<li><a>"Test123"</a></li>;)

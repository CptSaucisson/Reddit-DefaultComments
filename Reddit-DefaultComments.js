// ==UserScript==
// @name         Reddit-DefaultComments
// @namespace    http://eyraud.me/
// @version      0.1
// @description  Comments as default links on Reddit
// @author       Cpt.Saucisson
// @exclude        https://*.reddit.com/r/*/comments/*
// @exclude        http://*.reddit.com/r/*/comments/*
// @include        http://*.reddit.com/*
// @include        https://*.reddit.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

console.log("running");

var entries = document.getElementsByClassName("entry");

var url_comments, url_link, comments, link;
for each (e in entries){
    
    link = findLink(e);
    console.log(link);
    if(link == "None")continue;    
    url_link = link.href;
    
    comments = e.getElementsByClassName("comments")[0];
    console.log(comments);
    url_comments = comments.href;
    
    link.href = url_comments;
    comments.href = url_link;
    comments.innerHTML = "Direct Link";
    
    console.log(url_link+" + "+url_comments);
    console.log("______________");
}


function findLink(e){
    
    var tmp_link = e.getElementsByClassName("title");
    var link = "None";
    for each(l in tmp_link){
        if(l.tagName == "A"){
            return l;
        }
        else link = "None";
        
        //console.log(l.tagName);
    }
    return link;
}

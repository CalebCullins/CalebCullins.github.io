/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Caleb Cullins
   Date:   

*/
"use strict";

Date thisTime = new Date(2018, 2, 3,3,15,28);
var timeStr = thisTime.toLocalString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = new Date();
var thisHour = thisHour.getHours();
var thisMonth = newDate();
var thisMonth = thisMonth.getMonth();
var mapNum = (2*thisMonth + thisHour) % 24;
var imgStr = <img src='sd_sky + (mapNum)+.png' />;

document.getElementById("planisphere").insertAdjancentHTML("afterbegin", imgStr);


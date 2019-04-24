/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Caleb Cullins
   Date:   

*/
"use strict"

var thisTime = new Date(2018, 2, 3,3,15,28);			//(2018, 2, 3,3,15,28);
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime;
var thisHour = thisHour.getHours();
var thisMonth = thisTime;
var thisMonth = thisMonth.getMonth();
var mapNum = (2*thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum +".png' >";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);


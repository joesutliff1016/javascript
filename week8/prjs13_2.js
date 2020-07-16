"use strict";
function set_it() {
	var name = prompt("Enter your name", ""),
	thetext = name,
	expdate = ";expires=Mon 06 Mar 2017 13:00:00 UTC",
	newtext = encodeURIComponent(thetext);
	newtext += expdate;
	document.cookie = newtext;
}
var mycookie = document.cookie;
function read_it() {
	alert("Welcome " + mycookie);
	
}
if(document.cookie) {
	read_it();
}
else {
	set_it();
	read_it();

}

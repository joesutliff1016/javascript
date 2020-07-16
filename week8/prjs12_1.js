"use strict";
var urls = ["http://www.cnn.com",
			"http://www.wellsfargo.com",
			"http://www.msn.com",
			"http://www.yahoo.com",
			"http://www.google.com"
			],
rdiv = document.getElementById("random_link"),
rand = Math.floor(Math.random() * 5);
rdiv.innerHTML = '<a href="' + urls[rand] + '">Random Site!</a>';
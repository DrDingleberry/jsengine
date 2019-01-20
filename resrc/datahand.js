var file = new XMLHttpRequest();
var getLevel = function(lev) {
	file.responseType = "text";
	file.open("GET", "./resrc/levels/" + lev + ".txt", true);
	file.send();
};
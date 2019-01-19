var getLevel = function(lev) {
	var client = new XMLHttpRequest();
	client.open('GET', './resrc/levels/' + lev + '.txt');
	client.send();
	client.onload(function() {return client.responseText});
};

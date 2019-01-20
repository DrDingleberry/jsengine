var X = 36;
var Y = 0;
var level = 1;
var V = 0;
var G = 0;
var eX = [0];
var eY = [0];
var eID = [0];
var tX = [0];
var tY = [0];
var edata = [0];
var edata2 = [0];
var edata3 = [0];
var edata4 = [0];
var edata5 = [0];
var levdata = [0];
var levload = 0;
var keypress = [0];
var img = [0];
var edit = 0;
var condelay = 0;
var jump = 1;
var entity = 0;
var bg = [0];
var data9 = 0;
var render1 = 0;
var framecount = 0;
var edir = [0];
var drawBG = 1;
var fullscrn = 0;
var condelay2 = 0;
var fps = 0;
var switches = [0];
var camX = 0;
var camY = 0;
var img = [0];
var file = new XMLHttpRequest();
var getLevel = function(lev) {
	file.responseType = "text";
	file.open("GET", "./resrc/levels/" + lev + ".txt", true);
	file.send();
};
var loadImgs = function() {
	var temp = [0];
	var tem = 0;
	for (var i = 0; i < eID.length; i++) {
		tem = getEntityTex(eID[i]);
		for (var n = 0; n < tem.length; n++) {
			if (!(temp.includes(tem[n])) && tem[n] !== 0 && tem[n] != "0" && typeof tem[n] !== 'undefined') {
				temp[temp.length] = tem[n];
			};
		};	
	};
	for (var i = 0; i < temp.length; i++) {
		img[temp[i]] = new Image();
		img[temp[i]].src = "./resrc/img/" + temp[i] + ".png";
		console.log(img);
	};
	img[0] = new Image();
	img[0].src = "./resrc/img/0.jpg"
	bg[1] = new Image()
    bg[1].src = "./resrc/img/clouds.png";
};

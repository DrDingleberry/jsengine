			var canvas = document.getElementById('rendTarget');
            var context = canvas.getContext('2d');
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
            var colchk = function(x,y) {
                var c = [0];
                for (var i = 0; i < eID.length; i++) {
                    if (Math.abs(x - tX[i]) < 36 && Math.abs(y - tY[i]) < 36) {
                        c[c.length] = i;
                    };
                };
                return c;
            };
            var BGrend = function(pic,parX,parY,depth) {
                DrawImage(context,bg[pic],((0 - camX + parX) / depth) + (canvas.width / 2) - (bg[pic].width / 2),((camY + (0 - parY)) / depth) + (canvas.height / 2) - (bg[pic].height / 2),bg[pic].width,bg[pic].height,0);
            };
            Math.random = (function() {
                var seed = 0x2F6E2B1;
                return function() {
                // Robert Jenkins’ 32 bit integer hash function
                    seed = ((seed + 0x7ED55D16) + (seed << 12))  & 0xFFFFFFFF;
                    seed = ((seed ^ 0xC761C23C) ^ (seed >>> 19)) & 0xFFFFFFFF;
                    seed = ((seed + 0x165667B1) + (seed << 5))   & 0xFFFFFFFF;
                    seed = ((seed + 0xD3A2646C) ^ (seed << 9))   & 0xFFFFFFFF;
                    seed = ((seed + 0xFD7046C5) + (seed << 3))   & 0xFFFFFFFF;
                    seed = ((seed ^ 0xB55A4F09) ^ (seed >>> 16)) & 0xFFFFFFFF;
                    return (seed & 0xFFFFFFF) / 0x10000000;
                };
            }());
            var mousehandler = function() {};
            var delcheck = function() {
                for (var i = 0; i < eID.length; i++) {
                    if (eID[i] === "0" && eID[i] !== "" || true === isNaN(eID[i]) || eID[i] === undefined || eID[i] == null || typeof eID[i] === 'undefined') {
                        del(i);
                    };
                };
            };
            var del = function(i) {
                render1 = 0;
                eID.splice(i,1);
                eX.splice(i,1);
                eY.splice(i,1);
                edata.splice(i,1);
                edata2.splice(i,1);
                edata3.splice(i,1);
                edata4.splice(i,1);
                edata5.splice(i,1);
                tX.splice(i,1);
                tY.splice(i,1);
                edir.splice(i,1);
            };
            var keyDownHandler = function(e) {
                if (keypress.indexOf(e.keyCode) === -1) {
                    keypress[keypress.length] = e.keyCode;
                };
                if (e.keyCode === 69) {
                    if (edit === 0) {
                        X = Math.round(X / 36) * 36
                        Y = Math.round(Y / 36) * 36
                        edit = 1;
                    } else { edit = 0; };
                };
                if (e.keyCode === 81) {
                    if (fullscrn === 0 && condelay2 >= 10 && e.keyCode === 81) {
                        condelay2 = 0;
                        fullscrn = 1;
                        rfs = canvas.requestFullscreen
                            || canvas.webkitRequestFullScreen
                            || canvas.mozRequestFullScreen
                            || canvas.msRequestFullscreen 
                        ;
                        rfs.call(canvas);
                        canvas.height = screen.height;
                        canvas.width = screen.width;
                    };
                };
            };
            var keyUpHandler = function(e) {
                keypress.splice(keypress.indexOf(e.keyCode),1);
               
            };
            var saveedit = function() {
                var data = "";
                for (var i = 0; i < eID.length; i++ ) {
                data = data + eID[i] + "|" + eX[i] + ":" + eY[i] + ";" + edata[i] + "/";
                };
                console.log(data);
            };
            var collision = function() {
                X = X + V;
                for (var i = 0; i < tX.length; i++ ) {
                    if (Math.abs(X - tX[i]) < 36 && Math.abs(Y - tY[i]) < 35) {
                        X = X - V;
                        V = 0;
                    };
                };
                Y = Y + G;
				//for (var e = G + 1; e < G; e--) {
				//Y = Y - e;
                for (var i = 0; i < tX.length; i++ ) {
                    if (Math.abs(X - tX[i]) < 36 && Math.abs(Y - tY[i]) < 36) {
                        for (Y = Y; Math.abs(Y - tY[i]) < 36; Y++) {
                            if (Y < tY[i]) {
                                Y = Y - 2;
                            };
                        };
                        G = 0;
                        if (Y > tY[i]) { 
                            jump = 1; 
                        };
						break
                    };
                };
				//};
            };
            var charmove = function() { 
                if (keypress.indexOf(39) > -1 && V < 11) {
                    V = V + 1; };
                if (keypress.indexOf(37) > -1 && V > -11) {
                    V = V - 1; };
                if (keypress.indexOf(38) > -1 && jump > 0) {
                    jump = jump - 1;
                    G = 20; };
                G = G - 1;
                if (G < -70) { G = -70 };
                if (keypress.indexOf(39) === -1 && keypress.indexOf(37) === -1) {
                    if (colchk(X + V,Y + G).length === 1) {
                        jump = 0;
                        V = V + (-0.25 * Math.sign(V));
                    } else {
                        V = Math.round(V)
                        Y = Math.round(Y)
                        V = V + (-1 * Math.sign(V));
                    };
                };
            };
            var editor = function() {
                condelay = condelay - 1
                if (condelay < 0) {
                    if (keypress.indexOf(39) > -1) {
                        condelay = 6;
                        X = X + 36; };
                    if (keypress.indexOf(37) > -1) {
                        condelay = 6;
                        X = X - 36; };
                    if (keypress.indexOf(38) > -1) {
                        condelay = 6;
                        Y = Y + 36; };
                    if (keypress.indexOf(40) > -1) {
                        condelay = 6;
                        Y = Y - 36; };
                    if (keypress.indexOf(49) > -1) {
                        condelay = 6;
                        entity = entity - 1; };
                    if (keypress.indexOf(50) > -1) {
                        condelay = 6;
                        entity = entity + 1; };
                    if (keypress.indexOf(51) > -1) {
                        condelay = 6;
                        data9 = data9 - 1; };
                    if (keypress.indexOf(52) > -1) {
                        condelay = 6;
                        data9 = data9 + 1; };
					if (keypress.indexOf(53) > -1) {
                        condelay = 6;
                        level = level - 1;
						reset_temp(); };
                    if (keypress.indexOf(54) > -1) {
                        condelay = 6;
                        level = level + 1;
						reset_temp(); };
                    if (keypress.indexOf(32) > -1) {
                        condelay = 6;
                        extract(entity + "|" + X + ":" + Y + ";" + data9 + "/");
                        saveedit();
                    };
                };
            };
            var ai = function(i,ent) {
				if (ent !== 0) {
					eID[eID.length] = ent.toString();
					eX[eX.length] = 0;
                    eY[eY.length] = 0;
                    edata[edata.length] = data9;
                    edata2[edata.length] = 0;
                    edata3[edata.length] = 0;
					edata4[edata.length] = 0;
                    edata5[edata.length] = 0;
                    tX[tX.length] = "";
                    tY[tY.length] = "";
					i = eID.length;
				};
                if (eID[i] === "1") { 
                    return edata[i];
                };
                if (eID[i] === "2") { 
                    return edata[i]
                };
                if (eID[i] === "3") { 
                    if (Math.abs((+eX[i]) - X) < 37 && Math.abs((+eY[i]) - Y) < 36 && edit == 0) {
                        edata[i] = V / 1.2;
                    } else { edata[i] = (+edata[i]) * 0.85 };
                    eX[i] = (+eX[i]) + (+edata[i]);
                    edata2[i] = (+edata2[i]) + 1;
                    for (var a = 0; a < tX.length; a++ ) {
                        if (Math.abs((+eX[i]) - tX[a]) < 36 && Math.abs((+eY[i]) - tY[a]) < 35 && a !== i) {
                            eX[i] = (+eX[i]) - (+edata[i]);
                            if (eID[a] === "3") {edata[a] = edata[i]};
                            edata[i] = 0;
                        };
                    };
                    eY[i] = (+eY[i]) - (+edata2[i]);
                    for (var a = 0; a < tX.length; a++ ) {
                        if (Math.abs((+eX[i]) - tX[a]) < 36 && Math.abs((+eY[i]) - tY[a]) < 35 && a !== i) {
                            for (var t = (+eY[i]); Math.abs(t - tY[a]) < 36; t++) {
                                if (t < tY[a]) {
                                    t = t - 2;
                                };
                                eY[i] = t;
                            };
                            edata2[i] = 0;
                        };
                    };
                    tX[i] = (+eX[i]);
                    tY[i] = (+eY[i]);
                    return 3;
                };
                if (eID[i] === "4") {
                    edir[i] = Math.atan2(Y - eY[i],X - eX[i]);
                    if (isNaN(edir[i]) === true) {
                        edir[i] = 1.5708;
                    };
                    edata[i] = (+edata[i]) + 1;
					//fire rate and multishot chance
                    if ((+edata[i]) >= Math.round(Math.random() * 500) || (+edata[i]) >= 2) {
						//bullets per shot
                        for (var a = 0; a < 1; a++) {
                            eID[eID.length] = "5";
                            eX[eX.length] = eX[i];
                            eY[eY.length] = eY[i];
							edata[edata.length] = edir[i];
							//accuracy
                            //edata[edata.length] = edir[i] + (Math.random() - Math.random()) / 5;
                            edata2[edata.length] = 200;
                            edata3[edata.length] = 0;
							edata4[edata.length] = 0;
                            edata5[edata.length] = 0;
                            tX[tX.length] = "";
                            tY[tY.length] = "";
                        };
                        edata[i] = 0;
                    };
                    edir[i] = Math.atan2(-(Y - eY[i]),(X - eX[i]));
                    return 4;
                };
                if (eID[i] === "5") {
                    eX[i] = (+eX[i]) + (10 * Math.cos(+edata[i]));
                    eY[i] = (+eY[i]) + (10 * Math.sin(+edata[i]));
                    for (var a = 0; a < tX.length; a++ ) {
                        if (Math.abs((+eX[i]) - tX[a]) < 20 && Math.abs((+eY[i]) - tY[a]) < 18 && a !== i) {
                            del(i);
                            break;
                        };
                    };
                    if (810 < Math.abs(+eX[i] - X) || 810 < Math.abs(+eY[i] - Y) || isNaN(eX[i]) === true || isNaN(eY[i]) === true) {
                        del(i);
                    };
                    if (edata2[i] !== 0 && edata3[i] >= edata2[i]) {
                        del(i);
                    };
                    edata3[i] = edata3[i] + 1
                    return 5;
                };
                if (eID[i] === "6") {
                    if (Math.abs((+eX[i]) - X) < 37 && Math.abs((+eY[i]) - Y) < 36) {
                        level = edata[i];
                    };
                    return 0;
                };
                if (eID[i] === "7") {
                    switches[edata[i]] = 0;
                    for (var a = 0; a < tX.length; a++ ) {
                            if (Math.abs((+eX[i]) - tX[a]) < 36 && Math.abs((+eY[i]) - tY[a]) < 36) {
                                switches[edata[i]] = 1;
                                break;
                            };
                    };
                    return 7 + switches[edata[i]];
                };
                if (eID[i] === "8") {
                    if (switches[edata[i]] === 0) {
                        tX[i] = (+eX[i]);
                        tY[i] = (+eY[i]);
                        return 9;
                    } else {
                        tX[i] = 0;
                        tY[i] = 0;
                        return 10;
                    };
                };
                if (eID[i] === "9") {
                    if (Math.abs((+eX[i]) - X) < 36 && Math.abs((+eY[i]) - Y) < 36) {
                        if (G < 0) {
                            G = 35;
                        }
                    }
                    return 9;
                };
                if (eID[i] === "10") {
                    if (G >= 0) {
                            tX[i] = 0;
                            tY[i] = 0;
                        } else {
                            tX[i] = (+eX[i]);
                            tY[i] = (+eY[i]);
                        };
                    return 9;
                };
                if (eID[i] === "11") {
					var col = colchk(eX[i] - 36, eY[i]);
                    if (col.length > 1) {
						for (var c = 0; c < col.length; c++) {
							if (eID[col[c]] === "3") {
								edata[col[c]] = edata[i] - (eX[col[c]] - eX[i]);
								edata2[col[c]] = edata[i] - (eY[col[c]] - eY[i]);
							};
						};
					};
                    return 9;
                };
				if (ent !== 0) {
					del(i);
				};
            };
            var initAI = function() {
                for (var i = 0; i < eID.length; i++) {
                    if (eID[i] === "1") {
                        tX[i] = (+eX[i]);
                        tY[i] = (+eY[i]);
                    };
                    if (eID[i] === "7") {
                        switches[switches.length - 1] = 0;
                        edata[i] = switches.length;
                    };
                };
            };
            var DrawImage = function(ctx, image, x, y, w, h, rad) {
                ctx.save();
                ctx.translate(x+w/2, y+h/2);
                ctx.rotate(rad);
                ctx.translate(-x-w/2, -y-h/2);
                ctx.drawImage(image, x, y, w, h);
                ctx.restore();
            };
            var calcscrX = function(x1) {
                var x2 = 0 - X;
                var x3 = x2 + x1;
                x3 = x3 + (canvas.width / 2);
                return x3 };
            var calcscrY = function(y1) {
                var y2 = 0 - Y;
                var y3 = y2 + y1;
                y3 = y3 + (canvas.height / 2);
                return y3 };
            img[0] = new Image()
            img[0].src = "https://dummyimage.com/36x36/000000/ffe100.jpg";
            img[1] = new Image()
            img[1].src = "./resrc/dirt.png";
            img[2] = new Image()
            img[2].src = "./resrc/grass.png";
            img[3] = new Image()
            img[3].src = "./resrc/metal.png";
            img[4] = new Image()
            img[4].src = "./resrc/turret.png";
            img[5] = new Image()
            img[5].src = "./resrc/bullet.png";
            img[7] = new Image()
            img[7].src = "./resrc/switchoff.png";
            img[8] = new Image()
            img[8].src = "./resrc/switchon.png";
            img[9] = new Image()
            img[9].src = "./resrc/vinebrick1.png";
            img[10] = new Image()
            img[10].src = "./resrc/vinebg1.png";
            bg[1] = new Image()
            bg[1].src = "./resrc/clouds.png";
            var extract = function(data) {
                var i2 = 0;
                var temp = "";
                for ( var i = 0; i < data.length; i++ ) {
                    i2 = i + 1;
                    if ( data.substring(i, i2) !== "|" && data.substring(i, i2) !== ":" && data.substring(i, i2) !== ";" && data.substring(i, i2) !== "/") {
                        temp = temp + data.substring(i, i2) };
                    if ( data.substring(i, i2) === "|" ) {
                        eID[eID.length] = temp; 
                        temp = ""; }
                    if ( data.substring(i, i2) === ":" ) {
                        eX[eX.length] = temp;
                        temp = ""; }
                    if ( data.substring(i, i2) === ";" ) {
                        eY[eY.length] = temp;
                        temp = ""; }
                    if ( data.substring(i, i2) === "/" ) {
                        edata[edata.length] = temp;
                        temp = ""; }
                    edata2[edata2.length] = 0;
                    edata3[edata3.length] = 0;
                    edata4[edata4.length] = 0;
                    edata5[edata5.length] = 0;
                    edir[edir.length] = 0;
                };  
            };
            var reset_temp = function() {
                eX = [0];
                eY = [0];
                eID = [0];
                tX = [0];
                tY = [0];
                edata = [0];
                edata2 = [0];
                edata3 = [0];
                edata4 = [0];
                edata5 = [0];
                edir = [0];
                switches = [0];
				getLevel(level);
				file.onload = function() {
					if (edit === 0) {
						X = 36;
						y = 0;
					};
					extract(file.responseText);
					delcheck();
					initAI();
				};
                //extract(levelhand(level));
                eID[0] = "";
                eX[0] = "";
                eY[0] = "";
                tX[0] = "";
                tY[0] = "";
                levload = 1;
				console.log(level);
            };
            var render = function() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle="#42f4f1";
                context.fillRect(0,0,canvas.width,canvas.height)
                if (drawBG === 1) {
                    BGrend(1,0,0,2.5);
                    BGrend(1,1348,0,2.5);
                    BGrend(1,2698,0,2.5);
                    BGrend(1,-1350,0,2.5);
                    BGrend(1,0,-1368,2.5);
                    BGrend(1,1348,-1368,2.5);
                    BGrend(1,2698,-1368,2.5);
                    BGrend(1,-1350,-1368,2.5);
                };
                for ( var i = 0; i < eID.length; i++ ) {
                    if (eID[i] !== "0" && eID[i] !== "" && false === isNaN(eID[i]) && eID[i] !== undefined && eID[i] != null && typeof eID[i] !== 'undefined') {
                        render1 = ai(i,0);
                        if (render1 !== 0 && img[+eID[i]] !== 0 && img[+eID[i]] !== undefined && Math.abs((+eX[i]) - X) < ((canvas.width + 38) - ((canvas.width + 38) / 2)) && Math.abs((+eY[i]) - Y) < ((canvas.height + 38) - ((canvas.height + 38) / 2)) ) {
                            DrawImage(context,img[render1],0 - camX + (+eX[i]) + (canvas.width / 2) - (img[render1].width / 2),camY + (0 - (+eY[i])) + (canvas.height / 2) - (img[render1].height / 2),img[render1].width,img[render1].height,edir[i]);
                        };
                    } else {
                        del(i); 
                        i = i - 1;
                      };
                };
                context.fillStyle="#FF0000";
                context.fillRect(0 - camX + X + (canvas.width / 2) - 18,camY + (0 - Y) + (canvas.height / 2) - 18,36,36)
                context.fillText(X + "  " + Y + "     " + entity + "   " + data9 + "     " + fps,10,20)
            };
        reset_temp();
        document.addEventListener("keydown", keyDownHandler, false)
        document.addEventListener("keyup", keyUpHandler, false)
        rendTarget.addEventListener("mousemove", mousehandler, false)
        console.log(eID);
        console.log(eX);
        console.log(eY);
        console.log(img);
        window.main = function () {
            window.requestAnimationFrame(main);
            if (edit === 1) {
                editor();
            } else {
                charmove();
            };
            if (document.fullscreenElement === null ||
                    document.webkitFullscreenElement === null || 
                    document.mozFullScreenElement === null ||
                    document.msFullscreenElement === null) {
                        fullscrn = 0;
                        canvas.height = 540;
                        canvas.width = 540;
            };
            condelay2 = condelay2 + 1;
			camX = X;
			camY = Y;
            render();
			if (edit === 0) {collision()};
        };
        main();



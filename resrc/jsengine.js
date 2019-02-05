var canvas = document.getElementById('rendTarget');
var context = canvas.getContext('2d');
var colchk = function (x, y) {
  var c = [
    0
  ];
  for (var i = 0; i < eID.length; i++) {
    if (Math.abs(x - tX[i]) < 36 && Math.abs(y - tY[i]) < 36) {
      c[c.length] = i;
    };
  };
  return c;
};
var BGrend = function (pic, parX, parY, depth) {
  DrawImage(context, bg[pic], ((0 - camX + parX) / depth) + (canvas.width / 2) - (bg[pic].width / 2), ((camY + (0 - parY)) / depth) + (canvas.height / 2) - (bg[pic].height / 2), bg[pic].width, bg[pic].height, 0);
};
Math.random = (function () {
  var seed = 49734321;
  return function () {
    // Robert Jenkinsâ€™ 32 bit integer hash function
    seed = ((seed + 2127912214) + (seed << 12)) & 4294967295;
    seed = ((seed ^ 3345072700) ^ (seed >>> 19)) & 4294967295;
    seed = ((seed + 374761393) + (seed << 5)) & 4294967295;
    seed = ((seed + 3550635116) ^ (seed << 9)) & 4294967295;
    seed = ((seed + 4251993797) + (seed << 3)) & 4294967295;
    seed = ((seed ^ 3042594569) ^ (seed >>> 16)) & 4294967295;
    return (seed & 268435455) / 268435456;
  };
}());
var mousehandler = function () {
};
var delcheck = function () {
  for (var i = 0; i < eID.length; i++) {
    if (eID[i] === '0' && eID[i] !== '' || true === isNaN(eID[i]) || eID[i] === undefined || eID[i] == null || typeof eID[i] === 'undefined') {
      del(i);
    };
  };
};
var del = function (i) {
  render1 = 0;
  eID.splice(i, 1);
  eX.splice(i, 1);
  eY.splice(i, 1);
  edata.splice(i, 1);
  edata2.splice(i, 1);
  edata3.splice(i, 1);
  edata4.splice(i, 1);
  edata5.splice(i, 1);
  tX.splice(i, 1);
  tY.splice(i, 1);
  edir.splice(i, 1);
};
var keyDownHandler = function (e) {
  if (keypress.indexOf(e.keyCode) === - 1) {
    keypress[keypress.length] = e.keyCode;
  };
  if (e.keyCode === 69) {
    if (edit === 0) {
      X = Math.round(X / 36) * 36
      Y = Math.round(Y / 36) * 36
      edit = 1;
    } else {
      edit = 0;
    };
  };
  if (e.keyCode === 81) {
    if (fullscrn === 0 && condelay2 >= 10 && e.keyCode === 81) {
      condelay2 = 0;
      fullscrn = 1;
      rfs = canvas.requestFullscreen || canvas.webkitRequestFullScreen || canvas.mozRequestFullScreen || canvas.msRequestFullscreen
      ;
      rfs.call(canvas);
      canvas.height = screen.height;
      canvas.width = screen.width;
    };
  };
};
var keyUpHandler = function (e) {
  keypress.splice(keypress.indexOf(e.keyCode), 1);
};
var saveedit = function () {
  var data = '';
  for (var i = 0; i < eID.length; i++) {
    data = data + eID[i] + '|' + eX[i] + ':' + eY[i] + ';' + edata[i] + '/';
  };
  console.log(data);
};
var collision = function () {
  X = X + V;
  for (var i = 0; i < tX.length; i++) {
    if (Math.abs(X - tX[i]) < 36 && Math.abs(Y - tY[i]) < 35) {
      X = X - V;
      V = 0;
    };
  };
  Y = Y + G;
  //for (var e = G + 1; e < G; e--) {
  //Y = Y - e;
  for (var i = 0; i < tX.length; i++) {
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
var charmove = function () {
  if (keypress.indexOf(39) > - 1 && V < 11) {
    V = V + 1;
  };
  if (keypress.indexOf(37) > - 1 && V > - 11) {
    V = V - 1;
  };
  if (keypress.indexOf(38) > - 1 && jump > 0) {
    jump = jump - 1;
    G = 20;
  };
  G = G - 1;
  if (G < - 70) {
    G = - 70
  };
  if (keypress.indexOf(39) === - 1 && keypress.indexOf(37) === - 1) {
    if (colchk(X + V, Y + G).length === 1) {
      jump = 0;
      V = V + ( - 0.25 * Math.sign(V));
    } else {
      V = Math.round(V)
      Y = Math.round(Y)
      V = V + ( - 1 * Math.sign(V));
    };
  };
};
var editor = function () {
  condelay = condelay - 1
  if (condelay < 0) {
    if (keypress.indexOf(39) > - 1) {
      condelay = 6;
      X = X + 36;
    };
    if (keypress.indexOf(37) > - 1) {
      condelay = 6;
      X = X - 36;
    };
    if (keypress.indexOf(38) > - 1) {
      condelay = 6;
      Y = Y + 36;
    };
    if (keypress.indexOf(40) > - 1) {
      condelay = 6;
      Y = Y - 36;
    };
    if (keypress.indexOf(49) > - 1) {
      condelay = 6;
      entity = entity - 1;
    };
    if (keypress.indexOf(50) > - 1) {
      condelay = 6;
      entity = entity + 1;
    };
    if (keypress.indexOf(51) > - 1) {
      condelay = 6;
      data9 = data9 - 1;
    };
    if (keypress.indexOf(52) > - 1) {
      condelay = 6;
      data9 = data9 + 1;
    };
    if (keypress.indexOf(53) > - 1) {
      condelay = 6;
      level = level - 1;
      reset_temp();
    };
    if (keypress.indexOf(54) > - 1) {
      condelay = 6;
      level = level + 1;
      reset_temp();
    };
    if (keypress.indexOf(32) > - 1) {
      condelay = 6;
      extract(entity + '|' + X + ':' + Y + ';' + data9 + '/');
      initHitbox();
      loadImgs();
      saveedit();
    };
  };
};
var initHitbox = function () {
  tX = [
    0
  ];
  tY = [
    0
  ];
  for (var i = 0; i < eID.length; i++) {
    if (eID[i] === '1') {
      tX[i] = ( + eX[i]);
      tY[i] = ( + eY[i]);
    };
  };
};
var initSwitch = function () {
  for (var i = 0; i < eID.length; i++) {
    if (eID[i] === '7') {
      switches[switches.length - 1] = 0;
      edata[i] = switches.length;
    };
  };
};
var DrawImage = function (ctx, image, x, y, w, h, rad) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(rad);
  ctx.translate( - x - w / 2, - y - h / 2);
  ctx.drawImage(image, x, y, w, h);
  ctx.restore();
};
var extract = function (data) {
  var i2 = 0;
  var temp = '';
  for (var i = 0; i < data.length; i++) {
    i2 = i + 1;
    if (data.substring(i, i2) !== '|' && data.substring(i, i2) !== ':' && data.substring(i, i2) !== ';' && data.substring(i, i2) !== '/') {
      temp = temp + data.substring(i, i2)
    };
    if (data.substring(i, i2) === '|') {
      eID[eID.length] = temp;
      temp = '';
    }
    if (data.substring(i, i2) === ':') {
      eX[eX.length] = temp;
      temp = '';
    }
    if (data.substring(i, i2) === ';') {
      eY[eY.length] = temp;
      temp = '';
    }
    if (data.substring(i, i2) === '/') {
      edata[edata.length] = temp;
      temp = '';
    }
    edata2[edata2.length] = 0;
    edata3[edata3.length] = 0;
    edata4[edata4.length] = 0;
    edata5[edata5.length] = 0;
    edir[edir.length] = 0;
  };
};
file.onload = function () {
  if (edit === 0) {
    X = 36;
    y = 0;
  };
  extract(file.responseText);
  delcheck();
  initHitbox();
  initSwitch();
  loadImgs();
  levload = 1;
};
var reset_temp = function () {
  levload = 0
  eX = [
    0
  ];
  eY = [
    0
  ];
  eID = [
    0
  ];
  tX = [
    0
  ];
  tY = [
    0
  ];
  edata = [
    0
  ];
  edata2 = [
    0
  ];
  edata3 = [
    0
  ];
  edata4 = [
    0
  ];
  edata5 = [
    0
  ];
  edir = [
    0
  ];
  switches = [
    0
  ];
  getLevel(level);
  eID[0] = '';
  eX[0] = '';
  eY[0] = '';
  tX[0] = '';
  tY[0] = '';
  console.log(level);
};
var render = function () {
  if (levload === 1) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#42f4f1';
    context.fillRect(0, 0, canvas.width, canvas.height)
    if (drawBG === 1) {
      BGrend(1, 0, 0, 2.5);
      BGrend(1, 1348, 0, 2.5);
      BGrend(1, 2698, 0, 2.5);
      BGrend(1, - 1350, 0, 2.5);
      BGrend(1, 0, - 1368, 2.5);
      BGrend(1, 1348, - 1368, 2.5);
      BGrend(1, 2698, - 1368, 2.5);
      BGrend(1, - 1350, - 1368, 2.5);
    };
    for (var i = 0; i < eID.length; i++) {
      if (eID[i] !== '0' && eID[i] !== '' && false === isNaN(eID[i]) && eID[i] !== undefined && eID[i] != null && typeof eID[i] !== 'undefined') {
        render1 = ai(i, 0);
        if (render1 !== 0 && img[ + eID[i]] !== 0 && img[ + eID[i]] !== undefined && Math.abs(( + eX[i]) - X) < ((canvas.width + 38) - ((canvas.width + 38) / 2)) && Math.abs(( + eY[i]) - Y) < ((canvas.height + 38) - ((canvas.height + 38) / 2))) {
          DrawImage(context, img[render1], ( + eX[i]) - camX + (canvas.width / 2) - (img[render1].width / 2), camY - ( + eY[i]) + (canvas.height / 2) - (img[render1].height / 2), img[render1].width, img[render1].height, edir[i]);
        };
      } else {
        del(i);
        i = i - 1;
      };
    };
    context.fillStyle = '#FF0000';
    context.fillRect(X - camX + (canvas.width / 2) - 18, camY - Y + (canvas.height / 2) - 18, 36, 36)
    context.fillText(X + '  ' + Y + '     ' + entity + '   ' + data9 + '     ' + fps, 10, 20)
  };
};
reset_temp();
document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)
rendTarget.addEventListener('mousemove', mousehandler, false)
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
  if (document.fullscreenElement === null || document.webkitFullscreenElement === null || document.mozFullScreenElement === null || document.msFullscreenElement === null) {
    fullscrn = 0;
    canvas.height = 540;
    canvas.width = 540;
  };
  condelay2 = condelay2 + 1;
  camX = X;
  camY = Y;
  render();
  if (edit === 0) {
    collision()
  };
};
main();

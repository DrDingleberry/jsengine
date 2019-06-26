var ai = function (i, ent) {
  if (ent !== 0) {
    eID[eID.length] = ent.toString();
    eX[eX.length] = 0;
    eY[eY.length] = 0;
    edata[edata.length] = data9;
    edata2[edata.length] = 0;
    edata3[edata.length] = 0;
    edata4[edata.length] = 0;
    edata5[edata.length] = 0;
    tX[tX.length] = '';
    tY[tY.length] = '';
    i = eID.length;
  };
  if (eID[i] === '1') {
    return edata[i];
  };
  if (eID[i] === '2') {
    return edata[i]
  };
  if (eID[i] === '3') {
    if (Math.abs(( + eX[i]) - X) < 37 && Math.abs(( + eY[i]) - Y) < 36 && edit == 0) {
      edata[i] = V / 1.2;
    } else {
      edata[i] = ( + edata[i]) * 0.85
    };
    eX[i] = ( + eX[i]) + ( + edata[i]);
    edata2[i] = ( + edata2[i]) + 1;
    for (var a = 0; a < tX.length; a++) {
      if (Math.abs(( + eX[i]) - tX[a]) < 36 && Math.abs(( + eY[i]) - tY[a]) < 35 && a !== i) {
        eX[i] = ( + eX[i]) - ( + edata[i]);
        if (eID[a] === '3') {
          edata[a] = edata[i]
        };
        edata[i] = 0;
      };
    };
    eY[i] = ( + eY[i]) - ( + edata2[i]);
    for (var a = 0; a < tX.length; a++) {
      if (Math.abs(( + eX[i]) - tX[a]) < 36 && Math.abs(( + eY[i]) - tY[a]) < 35 && a !== i) {
        for (var t = ( + eY[i]); Math.abs(t - tY[a]) < 36; t++) {
          if (t < tY[a]) {
            t = t - 2;
          };
          eY[i] = t;
        };
        edata2[i] = 0;
      };
    };
    tX[i] = ( + eX[i]);
    tY[i] = ( + eY[i]);
    return 3;
  };
  if (eID[i] === '4') {
    edir[i] = Math.atan2(Y - eY[i], X - eX[i]);
    if (isNaN(edir[i]) === true) {
      edir[i] = 1.5708;
    };
    edata[i] = ( + edata[i]) + 1;
    //fire rate and multishot chance
    if (( + edata[i]) >= Math.round(Math.random() * 500) || ( + edata[i]) >= 2) {
      //bullets per shot
      for (var a = 0; a < 1; a++) {
        eID[eID.length] = '5';
        eX[eX.length] = eX[i];
        eY[eY.length] = eY[i];
        edata[edata.length] = edir[i];
        //accuracy
        //edata[edata.length] = edir[i] + (Math.random() - Math.random()) / 5;
        //range
        edata2[edata.length] = 200;
        edata3[edata.length] = 0;
        edata4[edata.length] = 0;
        edata5[edata.length] = 0;
        tX[tX.length] = '';
        tY[tY.length] = '';
      };
      edata[i] = 0;
    };
    edir[i] = Math.atan2( - (Y - eY[i]), (X - eX[i]));
    return 4;
  };
  if (eID[i] === '5') {
    eX[i] = ( + eX[i]) + (10 * Math.cos( + edata[i]));
    eY[i] = ( + eY[i]) + (10 * Math.sin( + edata[i]));
    for (var a = 0; a < tX.length; a++) {
      if (Math.abs(( + eX[i]) - tX[a]) < 20 && Math.abs(( + eY[i]) - tY[a]) < 18 && a !== i) {
        del(i);
        break;
      };
    };
    if (810 < Math.abs( + eX[i] - X) || 810 < Math.abs( + eY[i] - Y) || isNaN(eX[i]) === true || isNaN(eY[i]) === true) {
      del(i);
    };
    if (edata2[i] !== 0 && edata3[i] >= edata2[i]) {
      del(i);
    };
    edata3[i] = edata3[i] + 1
    return 5;
  };
  if (eID[i] === '6') {
    if (Math.abs(( + eX[i]) - X) < 37 && Math.abs(( + eY[i]) - Y) < 36) {
      level = edata[i];
    };
    return 0;
  };
  if (eID[i] === '7') {
    switches[edata[i]] = 0;
    for (var a = 0; a < tX.length; a++) {
      if (Math.abs(( + eX[i]) - tX[a]) < 36 && Math.abs(( + eY[i]) - tY[a]) < 36) {
        switches[edata[i]] = 1;
        break;
      };
    };
    return 7 + switches[edata[i]];
  };
  if (eID[i] === '8') {
    if (switches[edata[i]] === 0) {
      tX[i] = ( + eX[i]);
      tY[i] = ( + eY[i]);
      return 9;
    } else {
      tX[i] = 0;
      tY[i] = 0;
      return 10;
    };
  };
  if (eID[i] === '9') {
    if (Math.abs(( + eX[i]) - X) < 36 && Math.abs(( + eY[i]) - Y) < 36) {
      if (G < 0) {
        G = 35;
      };
    };
    return 9;
  };
  if (eID[i] === '10') {
    if (G >= 0) {
      tX[i] = 0;
      tY[i] = 0;
    } else {
      tX[i] = ( + eX[i]);
      tY[i] = ( + eY[i]);
    };
    return 9;
  };
  if (eID[i] === '11') {
    var col = colchk(eX[i] - 36, eY[i]);
    if (col.length > 1) {
      for (var c = 0; c < col.length; c++) {
        if (eID[col[c]] === '3') {
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

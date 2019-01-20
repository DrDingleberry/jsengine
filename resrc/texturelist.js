var getEntityTex = function(e) {
	var temp = [0];
	if (e === "1") {
		temp[0] = 1;
		temp[1] = 2;
	};
	if (e === "2") {
		temp[0] = 1;
	};
	if (e === "3") {
		temp[0] = 3;
	};
	if (e === "4") {
		temp[0] = 4;
		temp[1] = 5;
	};
	if (e === "5") {
		temp[0] = 5;
	};
	if (e === "6") {
		temp[0] = 0;
	};
	if (e === "7") {
		temp[0] = 7;
		temp[1] = 8;
	};
	if (e === "8") {
		temp[0] = 10;
	};
	if (e === "9") {
		temp[0] = 9;
	};
	if (e === "10") {
		temp[0] = 9;
	};
	if (e === "11") {
		temp[0] = 9;
	};
	return temp;
};
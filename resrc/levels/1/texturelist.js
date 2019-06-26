//This lists what entities use what textures, with textures being listed by their IDs. For example, enitity 1, or a solid tile, needs textures 1 and 2, dirt and grassy dirt, loaded.
var getEntityTex = function(e) {
	var temp = [0];
	//entity1
	if (e === "1") {
		temp[0] = 1;
		temp[1] = 2;
	};
	//entity2
	if (e === "2") {
		temp[0] = 1;
	};
	//entity3
	if (e === "3") {
		temp[0] = 3;
	};
	//entity4
	if (e === "4") {
		temp[0] = 4;
		temp[1] = 5;
	};
	//entity5
	if (e === "5") {
		temp[0] = 5;
	};
	//entity6
	if (e === "6") {
		temp[0] = 0;
	};
	//entity7
	if (e === "7") {
		temp[0] = 7;
		temp[1] = 8;
	};
	//entity8
	if (e === "8") {
		temp[0] = 10;
	};
	//entity9
	if (e === "9") {
		temp[0] = 9;
	};
	//entity10
	if (e === "10") {
		temp[0] = 9;
	};
	//entity11
	if (e === "11") {
		temp[0] = 9;
	};
	return temp;
};
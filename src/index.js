module.exports = function towelSort (matrix) {
	if (matrix == undefined) return [];
	
	var massiv = [];
	
	for(var i = 0; i < matrix.length; i++) {
		var mass = matrix[i];
		if(i % 2 == 0) {
			for(var j = 0; j < mass.length; j++) {
				massiv.push(mass[j]);
			}
		}
		else {
			for(var j = mass.length - 1; j >= 0; j--) {
				massiv.push(mass[j]);
			}
		}
	}
	return massiv;
}

module.exports = function towelSort(matrix) {
	const arr = [];
	if (matrix == null) {
		return [];
	} else {
		matrix.forEach((el, i) => {
			if (i === 0 || (i % 2) === 0) {
				arr.push(el);
			} else {
				arr.push(el.reverse());
			}
		})

		return arr.flat();
	}
}

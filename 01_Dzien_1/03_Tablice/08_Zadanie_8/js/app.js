
function addArrays(arr1, arr2) {
	let resArr = arr1.length >= arr2.length ? new Array(arr1.length) : new Array(arr2.length);
	for (let i = 0; i < resArr.length; i++) {
		if (arr1[i] != undefined && arr2[i] != undefined) {
			resArr[i] = arr1[i] + arr2[i];
		}
		else {
			resArr[i] = arr1[i] != undefined ? arr1[i] : arr2[i];
		}
	}
	return resArr;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));

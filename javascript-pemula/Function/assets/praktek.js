// cara menjumlahkan volume dua kubus


// membuat function
function jumlahVolumeDuaKubus (a, b) {

	var total;
	var volumeA;
	var volumeB;

	volumeA = a + a + a;
	volumeB = b * b * b;

	total = volumeA + volumeB;


	return total;
}


// menjalankakan function
alert (jumlahVolumeDuaKubus (10, 5));
alert (jumlahVolumeDuaKubus (5, 5));
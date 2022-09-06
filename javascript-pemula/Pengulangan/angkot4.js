var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

// menggunakan control flow yang namanya 'if dan else if'
// control flow merupakan alur kendali, yang fungsinya untuk mengatur pada setiap bagiannya yang akan d tampilkan

for ( noAngkot; noAngkot <= jmlAngkot; noAngkot++ ) {
	//jika kondisi bernilai true maka masuk ke control flow

	if (noAngkot <= angkotBeroperasi) {
		//jika kondisi 1 bernilai true maka jalankan aksi 1
		//tapi, kalau kondisi 2 bernilai true maka jalankan aksi 2
		//diluar dari kondisi jalankan 'else'
		console.log ( 'Angkot No. ' + noAngkot + ' Beroperasi Setiap Hari' );

	} else if ( noAngkot == 8 || noAngkot  == 10 ) {
		//disini saya ingin menampilkan 2 buah angkot yang melakukan lembur, yaitu angkot no.8 dan no.10 
		//bisa saja kita menggunakan 2 else if, tetapi supaya meringkas code pada program kita dapat menambahkan operator 'or (||)' pada kondisi yang sama. Lalu tulis kembali variabel serta no. angkot yang ingin melakukan lembur 
		//jika kondisi bernilai true maka jalankan aksi 2
		console.log ( 'Angkot No. ' + noAngkot + ' Sedang Lembur' );

	} else {
		//jika hasil kondisi diatas bernilai false maka jalankan aksi 'else'. atau;
		//diluar kondisi yang ditentukan diatas, maka jalankan aksi pada 'else' 
		console.log ( 'Angkot No. ' + noAngkot + ' Beroperasi Kurang Baik' );
	}
}

// struktur else if

/* 
for (kondisi) {
	
	if (kondisi) {
		aksi 1
	} else if (kondisi) {
		aksi 2
	} else {
		aksi 3
	}
}

*/
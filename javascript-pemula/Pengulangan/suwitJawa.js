var tanya = true;

while ( tanya ) {
	// menangkap pilihan player
	var p = prompt ('Tentukan Pilihan : Gajah, Orang , Semut');

	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();
		// si comp menyimpan suatu angka di dalamnya, setiap user membuka/merefresh browsernya, jika lihat di console maka angka yang ditampilkan berubah-rubah
		// nanti tinggal di tentukan masing masing angka pada pilihannya, kalau komputernya milih semut/gajah/orang itu angkanya berapa 

	if( comp < 0.42 ) {
		comp = 'gajah' ;
	} else if ( comp >= 0.42 && comp < 0.77 ) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}
		// sekarang komputer sudah memiliki pilihan randomnya

	// menentukakn rules
		// maksudnya rules : misalnya, gajah vs semut menang siapa ?/ semut vs manusia menang siapa ?/ dll
		// komentar yang ada dibawah ini menggunakan else if saja, sebenarnya kita bisa menggunakan operator 'ternary' yang mana penulisannya lebih ringkas 
	var hasil = ''

	if (p == comp) {
		hasil = 'SERI!';
	} else if ( p == 'gajah' ) {
		// 	if ( comp == 'orang' ) {
		// 		hasil = 'ANDA MENANG!';
		// 	} else {
		// 		hasil = 'ANDA KALAH!';
		// 	}
		hasil = ( comp == 'orang' ) ? 'ANDA MENANG' : 'ANDA KALAH';
		// cara membacanya : apakah computer memilih 'orang' ? jika ya maka 'ANDA MENANG' akan masuk kedalam variabel 'hasil', jika tidak maka 'ANDA KALAH' akan masuk kedalam variabel 'hasil' 
	} else if ( p == 'orang' ) {
		hasil = ( comp == 'gajah' ) ? 'ANDA KALAH' : 'ANDA MENANG';
	} else if ( p == 'semut' ) {
		hasil = ( comp == 'orang' ) ? 'ANDA KALAH' : 'ANDA MENANG';
	} else {
		hasil = 'Anda Memasukan Pilihan Yang Salah!';
	}



	// tampilkan hasilnya
	alert ( 'Kamu Memilih : ' + p + '\nKomputer Memilih : ' + comp + '\nMaka Hasilnya : ' + hasil );


	tanya  = confirm ('Mau Main Lagi ?');
}

alert ('Terimakasih Sudah Bermain!');






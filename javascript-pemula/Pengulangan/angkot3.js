var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;
// menggunakan fungsi 'for' yang mana didalam fungsi tersebut saya menyisipkan 'if else'

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  // jika kondisi bernilai true maka program akan berlanjut, jika bernilai false program tidak akan dijalankan

  if (noAngkot <= angkotBeroperasi) {
    // jika kondisi pada 'if' bernilai true, maka jalankan aksi 1
    // jika kondisi pada 'if' bernilai false, maka jalankan aksi 2
    console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang Libur");
  }
}

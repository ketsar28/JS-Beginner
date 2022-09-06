var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;
// contoh penggunaan fungsi pengulangan yang namanya 'while' dan 'for'
// konsepnya sama, hanya saja kalau fungsi 'for' kita menuliskan variabel awal, kondisi, dan juga increment hanya dalam satu baris. sedangkan fungsi 'while' itu terpisah pisah pada setiap barisnya

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
}

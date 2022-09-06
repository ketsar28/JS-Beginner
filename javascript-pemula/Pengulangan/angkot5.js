var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

// menggunakan control flow yang namanya 'if dan else if'
// control flow merupakan alur kendali, yang fungsinya untuk mengatur pada setiap bagiannya yang akan d tampilkan

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  //jika kondisi bernilai true maka masuk ke control flow

  if (noAngkot <= 6 && noAngkot !== 5) {
    // caranya yaitu kita tambahkan salah satu operator logika yaitu 'and (&&)' dan operator identitas (!==) di samping kondisi tersebut
    // membacanya yaitu : jika no. angkot lebih kecil dari pada 6, dan bukan no. angkot yang ke 5. Maka jalankan aksi tersebut
    // ketika console aksi 1 di jalankan maka program selanjutnya akan membaca pada 'else if'. Dan membacanya ada no. angkot ke 5 yang sedang keadaan lembur, lalu console aksi 2 akan di jalankan jika penulisannya benar dan kondisinya juga true.

    console.log("Angkot No. " + noAngkot + " Beroperasi Setiap Hari");
  } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
    // saya ingin menampilkan angkot no.8 , no.10, dan no.5 dalam keadaan lembur, mungkin penulisan kita sudah benar tetapi ketika kita run, angkot no.5 nya tidak dalam keadaan lembur.
    // supaya angkot no.5 keadaan lembur, caranya kita lihat pada pengulangan 'if'. disanalah terjadi kesalahan syntax
    console.log("Angkot No. " + noAngkot + " Sedang Lembur");
  } else {
    //jika hasil kondisi diatas bernilai false maka jalankan aksi 'else'. atau;
    //diluar kondisi yang ditentukan diatas, maka jalankan aksi pada 'else'
    console.log("Angkot No. " + noAngkot + " Beroperasi Kurang Baik");
  }
}

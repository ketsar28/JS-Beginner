var p = prompt("Silakan Masukan Makanan/Minuman Disini \n (Cth : nasi, daging, susu, hamburger, softdrink) :");

switch (p) {
  // disini saya meringkas sebuah syntax pada case, yang mana kita tulis case case yang sekiranya menjalankan aksi yang sama, dan pada case" tersebut kita hilangkan dahulu 'break;'. kita tulis kembali 'break;' nya setelah penulisan aksi

  case "nasi":

  case "daging":

  case "susu":
    alert(p + " Merupakan Makanan/Minuman Sehat!");
    break;

  case "hamburger":

  case "softdrink":
    alert(p + " Merupakan Makanan/Minuman Tidak Sehat!");
    break;

  default:
    alert("Yang Anda Masukan Tidak Ada Didalam Daftar!");
    break;
}

// Berikut Struktur Fungsi Pengulangan 'Switch'

/*

switch (ekspresi) {
	
	case 'nilai 1':
		aksi 1;
		break;

	case 'nilai 2':
		aksi 2;
		break;

	case 'nilai 3':
		aksi 3;
		break;

	case 'n':
		aksi ke-n;
		break;

	default :
		aksi default;
		break;
}

*/

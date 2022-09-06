// Program dalam Bahasa C
// Bahasa C menganut sistem 'Block Scope', dimana kita tidak bisa menjalanka sebuah perintah jika perintah tersebut berada diluar 'Scopenya'

/*
int i = 2;

if(i % 2 == 0){
    bool genap = true;
} 

if( genap ) {
    printf('GENAP!')
}
*/

// program dalam bahasa JS
// Bahasa JS bisa dieksekusi perintahnya, karena Javascript menganut 'Block Function'.
//Contoh : Jadi ketika kita memiliki sebuah kondisi yang didalamnya terdapat sebuah variabel, lalu variabel tersebut ingin kita jalankan diluar 'Block'/'Scope' nya. Itu tetap bisa

// let i = 2;

// if (i % 2 == 0) {
//   genap = true;
// }

// if (genap) {
//   console.info("GENAP!");
// }

let a = 2; //contoh lain block function

function mencobaBlockFunction() {
  b = 5;
  console.log(a);
}

mencobaBlockFunction();

/*
studikasus diatas : ketika kita memiliki sebuah variabel tersebut bisa dipakai dimanapun, karena itu disebut variabel global/window scope. Lalu kita membuat sebuah function yang didalamnya terdapat variabel yang berbeda namun kita ingin mengeksekusi variabel yang diluar, maka itu tetap bisa dilakukan.

Karena dalam konsep Block Function 'dia bisa mengeksekusi sebuah variabel yang diluar, jika perintahnya terdapat di dalam sebuah 'Block' '. Dan sebaliknya, dia tidak bisa mengeksekusi sebuah variabel yang ada di dalam 'block' jika perintahnya berada diluar.
*/

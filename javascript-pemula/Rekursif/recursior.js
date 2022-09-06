// fungsi berikut tidak berhenti sehingga browser tidak cukup untuk menampungnya
/*
function tes() {
  return tes();
}

tes();
*/

// Base Case : kondisi akhir dari rekursif yang menghasilkan nilai
// Example :

// if ( n == 0 ) return;
/*
function printNumber(n) {
  if (n == 0) {
    return;
  }
  console.info(n);
  printNumber(n - 1);
}

printNumber(5);
*/

// faktorial pada JS
/*
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
  console.log(n);
}

 faktorial(5);
 */

// function coba(n) {
//   var tes = 1;
//   for (var i = n; i > 0; i--) {
//     tes *= i;
//   }
//   return tes;
// }

// coba(10);

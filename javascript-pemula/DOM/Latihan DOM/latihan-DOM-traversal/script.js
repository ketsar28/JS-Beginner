const tutup = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

// tutup.addEventListener("click", () => {
//   card.classList.add("active");
// });

for (let i = 0; i < tutup.length; i++) {
  tutup[i].addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
}

tutup.forEach(function (click) {
  click.addEventListener("click", (x) => {
    x.target.parentElement.style.display = "none";
    console.log(tutup);
  });
});

// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//   });
// }

//tutup.forEach(function (c) {
//   c.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//   });
// });

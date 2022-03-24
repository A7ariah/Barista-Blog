
let hamburger = 
document.querySelector('.hamburger');
let menu = 
document.querySelector('.navbar');
let bod = 
document.querySelector('.container');
console.log(hamburger)
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

const card = document.querySelector('.card_inner');

card.addEventListener('click', function () {
 card.classList.toggle('is-flipped');
});



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



//slideshow//
var images = ['Photos/IMG_8160.jpg', 'Photos/IMG_7872.jpg', 'Photos/IMG_7852.HEIC', 'Photos/colton.heic', 'Photos/laughing.heic'];
var index = 0;

var imageContainer = document.getElementById('main-img')

next_slide();

function next_slide(){
  imageContainer.src = images[index];

  if(index === images.length){
    index = images.length - 5;
    next_slide();
  } else{
    setTimeout(function() {
      index++;
      next_slide();
    }, 2000);
  }
}


/*function popUp(){
  let usertag;
  let person = prompt("Please enter your user username");
  if (usertag == null || usertag == "")
  {
    text= "user cancelled the prompt.";
  } else {
    text = "Hey" + person + "your thoughts have been posted!";
  }
  // not sure what this part means
  document.getElementById("demo").innerHTML = text;
  }*/
  
let submition = [];

const addSubmit= (ev)=> {
  ev.preventDefault();
  let sub = {
    id: Date.now(),
    title: document.getElementById('btn').value
  }
  submition.push(sub);
  document.querySelector('forms').reset();

  console.warn('added', {submition});
  let pre=document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(submition, '\t', 2);
}

document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('btn').addEventListener('click', addSubmit);
});


function Share() {
  alert("This paige is still under construction!");
}

function Learn() {
  alert("This paige is still under construction!");
}


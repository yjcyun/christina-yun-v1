// home section - view my work button
let button = document.querySelector('.btn');
let btnArrow = document.querySelector('#btn-arrow');

button.addEventListener('mouseover', function() {
   button.children[0].style.transform="rotate(90deg)";
});

button.addEventListener('mouseout', function() {
  button.children[0].style.transform="rotate(0deg)";
});


// navbar section - hover effect
// const setUp = (navItem) => {
//   let icon = document.querySelector(`#icon-${navItem}`);

//   icon.children[0].addEventListener('mouseover', function() {
//     icon.children[0].appendChild(document.createTextNode(navItem));
    
//   });

//   icon.children[0].addEventListener('mouseout', function() {
//     icon.children[0].removeChild(icon.children[0].childNodes[0]);
//   });
// }

// setUp('home');
// setUp('profile');
// setUp('projects');
// setUp('contact');

// Navbar - hide on home page
const navbar = document.querySelector('#navbar');

window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    navbar.style.top = '0';
  } else {
    navbar.style.top='-500px';
  }
}



//  footer timestamp
document.querySelector('#current-year').innerHTML = new Date().getFullYear();
//  footer timestamp
document.querySelector('#current-year').innerHTML = new Date().getFullYear();

//  homepage tilt effect
$('.intro').tilt({
  maxTilt: 5,
  speed: 100,
})

// homepage hover effect
const homeLinks = document.querySelectorAll('.intro span');
const homeH1= document.querySelector('.intro');

homeLinks.forEach(homeLink => {
  homeLink.addEventListener('mouseover', () => {
    homeH1.classList.add('greyOut');
  });
  homeLink.addEventListener('mouseout', () => {
    homeH1.classList.remove('greyOut');
  });
})


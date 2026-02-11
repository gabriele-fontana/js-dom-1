//select html elements
const wrapper = document.getElementById('img-wrapper');
const btn = document.querySelector('button');

//add lamp img to the page
const bulbImg = document.createElement('img');
bulbImg.src =  './img/white_lamp.png';
bulbImg.alt='lampadina spenta';
document.getElementById('img-wrapper').appendChild(bulbImg);


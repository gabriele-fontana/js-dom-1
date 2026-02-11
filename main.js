//select html elements
const wrapper = document.getElementById('img-wrapper');
const btn = document.querySelector('button');

//add lamp img to the page
const bulbImg = document.createElement('img');
bulbImg.src =  './img/white_lamp.png';
bulbImg.alt='light bulb';
document.getElementById('img-wrapper').appendChild(bulbImg);
//add text into the button
btn.innerHTML = 'accendi'
// add button interaction with the page


function displayYellowLamp(){
    bulbImg.src = './img/yellow_lamp.png'
    bulbImg.alt= 'accesa'
    btn.innerHTML= 'spegni'
}
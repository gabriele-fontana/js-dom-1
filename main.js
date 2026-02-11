//select html elements
const wrapper = document.getElementById('img-wrapper');
const btn = document.querySelector('button');
const page = document.querySelector('.page');/* select page to change background */
//add lamp img to the page
const bulbImg = document.createElement('img');
bulbImg.src =  './img/white_lamp.png';
bulbImg.alt='light bulb';
document.getElementById('img-wrapper').appendChild(bulbImg);
//add text into the button
btn.innerHTML = 'accendi'
// add button interaction with the page


function toggleLamp() {
    // check if the lamp is off
    if (bulbImg.src.includes('white_lamp.png')) {
        // if true, turn on the light
        bulbImg.src = './img/yellow_lamp.png';
        btn.innerHTML = 'Spegni';
        page.style.backgroundColor = 'lightblue';/* lighter background with light on */
        
    } else {
        // if false, turn it off
        bulbImg.src = './img/white_lamp.png';
        btn.innerHTML = 'Accendi';
        page.style.backgroundColor = 'black';/* black background with light off */
    }
}
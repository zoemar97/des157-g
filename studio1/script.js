'use strict'

console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);



function processForm(evt) {
  var firstName = document.querySelector('#firstName').value;
  var sunSign = document.querySelector('#sunSign').value;
  var negAdj = document.querySelector('#negAdj').value;
  var posAdj = document.querySelector('#posAdj').value;
  var verb = document.querySelector('#verb').value;
  var number = document.querySelector('#number').value;
  var color = document.querySelector('#color').value;

  var outputMsg = document.querySelector('#outputMsg');
  var signChange = document.querySelector('#signChange');

  signChange.innerHTML = 'Hello ' + firstName + '! I see that you are a ' +
    sunSign + '.';

  outputMsg.innerHTML =
    firstName + ' you&rsquo;re a ' + sunSign + '. You think that you are ' + negAdj +
    ' but you are actually ' + posAdj + '! Thinking about astrology makes you want to ' +
    verb + '. Look for the numbers ' + number + number + number + ' and wear ' +
    color + '. Maybe the stars will align for you this week!';

  evt.preventDefault();
}
//tried to change img attribute based on input
//couldn't figure it out :(
/*function changeImage() {
  var sign = document.querySelector('#sign');
  var sunSign = document.querySelector('#sunSign').value;

  if (sunSign == ('aries' || 'Aries')) {
    sign.setAttribute('src', 'images/sign-1.png');
  } else if (sunSign == ('taurus' || 'Taurus')) {
    sign.setAttribute('src', 'images/sign-2.png');
  } else {
    sign.setAttribute('src', 'images/astro.png');
  }

}*/

//resets form to original state
function resetForm() {
  signChange.innerHTML = 'Welcome!';
  outputMsg.innerHTML = 'Hello, input your answer&rsquo;s on the left side ' +
  'to determine your own astrology made libs! Your sun sign is your astrological sign, '+
  'which dictates your personality. No need to take the results too seriously,'+
  ' afterall, astrology is just another fun subject to explore :-)!';
return false;
}

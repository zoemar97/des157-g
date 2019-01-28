'use strict'

console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
//document.querySelector('#reset').addEventListener('click', resetForm);


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
    ' but you are actually ' + posAdj + '! Thinking about astrology makes you want to '
    + verb + '. look for the numbers ' + number + number + number + ' and wear ' +
    color + ' and maybe the stars will align this week for you!';

  evt.preventDefault();
}

/*function resetForm() {


}*/

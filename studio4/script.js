'use strict'
console.log('reading js');

var modal = document.querySelector('.modal');
var body = document.querySelector('body');

body.addEventListener('click', function() {
  modal.style.display = 'block';
});

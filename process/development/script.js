'use strict'
console.log('reading js');

var modal = document.querySelector('.modal');
var body = document.querySelector('body');
var button = document.querySelector('#button');
var part1 = document.querySelector('#part1');
var next = document.querySelector('form');
var form = document.querySelector('#form');

button.addEventListener('click', function() {
  part1.style.display = 'block';
  modal.style.display = 'none';
});
next.addEventListener('click', function() {
  form.style.display = 'block';
  part1.style.display = 'none';
});

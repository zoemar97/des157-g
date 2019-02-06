'use strict'
console.log('reading js');

var bag = document.querySelector('#bag');
var bottle = document.querySelector('#bottle');
var pad = document.querySelector('#pad');
var gum = document.querySelector('#gum');
var content = document.querySelector('.content');
var contentHead = document.querySelector('h2');
var changeImg = document.querySelector('#changeImg');
var text = document.querySelector('p');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
//to display modal/change p content/and image
bag.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'My Handy Baggu Backpack';
  changeImg.setAttribute('src', 'images/bag.svg');
  text.innerHTML = 'I bought this backpack this past fall quarter. I previously had a really clunky backpack.'
                    + 'This backpack is cool because I was able to get it on sale for $20 dollars less.'+
                    'Im able to fit as much as I can since its a lot more stretchy than my previous backpack. ';
});
bottle.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'My Swell Sip Bottle';
  changeImg.setAttribute('src', 'images/bottle.svg');
});
pad.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'A Pad For My Menstrual Needs';
  changeImg.setAttribute('src', 'images/pad.svg');
});
gum.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'Gum For When I Want A Snack';
  changeImg.setAttribute('src', 'images/gum.svg');
});
close.addEventListener('click', function() {
  modal.style.display = 'none';
});
//mouseover/out for image interactivity when user hovers over
bag.addEventListener('mouseover', function() {

  bag.style.height = '300px';
  bag.style.width = '300px';
});

bag.addEventListener('mouseout', function() {

  bag.style.height = '275px';
  bag.style.width = '275px';
});
bottle.addEventListener('mouseover', function() {

  bottle.style.height = '300px';
  bottle.style.width = '300px';
});

bottle.addEventListener('mouseout', function() {

  bottle.style.height = '275px';
  bottle.style.width = '275px';
});
pad.addEventListener('mouseover', function() {

  pad.style.height = '300px';
  pad.style.width = '300px';
});

pad.addEventListener('mouseout', function() {

  pad.style.height = '275px';
  pad.style.width = '275px';
});
gum.addEventListener('mouseover', function() {

  gum.style.height = '300px';
  gum.style.width = '300px';
});

gum.addEventListener('mouseout', function() {

  gum.style.height = '275px';
  gum.style.width = '275px';
});

'use strict'
console.log('reading js');

var bag = document.querySelector('#bag');
var bottle = document.querySelector('#bottle');
var pad = document.querySelector('#pad');
var gum = document.querySelector('#gum');
var content = document.querySelector('.content');
var contentHead = document.querySelector('h2');
var changeImg = document.querySelector('#changeImg');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
//to display modal/change p content/and image
bag.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'My Handy Baggu Backpack';
  changeImg.setAttribute('src','images/bag.svg');
});
bottle.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'My Swell Sip Bottle';
  changeImg.setAttribute('src','images/bottle.svg');
});
pad.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'A Pad For My Menstrual Needs';
  changeImg.setAttribute('src','images/pad.svg');
});
gum.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'Gum For When I Want A Snack';
  changeImg.setAttribute('src','images/gum.svg');
});
close.addEventListener('click', function() {
  modal.style.display = 'none';
});
//mouseover/out for image interactivity when user hovers over
bag.addEventListener('mouseover', function() {

  bag.style.height = '400px';
  bag.style.width = '400px';
});

bag.addEventListener('mouseout', function() {

  bag.style.height = '375px';
  bag.style.width = '375px';
});
bottle.addEventListener('mouseover', function() {

  bottle.style.height = '400px';
  bottle.style.width = '400px';
});

bottle.addEventListener('mouseout', function() {

  bottle.style.height = '375px';
  bottle.style.width = '375px';
});
pad.addEventListener('mouseover', function() {

  pad.style.height = '400px';
  pad.style.width = '400px';
});

pad.addEventListener('mouseout', function() {

  pad.style.height = '375px';
  pad.style.width = '375px';
});
gum.addEventListener('mouseover', function() {

  gum.style.height = '400px';
  gum.style.width = '400px';
});

gum.addEventListener('mouseout', function() {

  gum.style.height = '375px';
  gum.style.width = '375px';
});

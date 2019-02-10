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
  text.innerHTML = 'This water bottle was gifted to me by my friends parents as a christmas present'
                  + ' I bring it with me everywhere, whether it\'s my backpack or tote bag. '
                  + 'I never go thirsty if I have my water bottle with me. ' + 'You know gotta stay hydrated and get those 8 cups of water.'
                  + ' Ideally, I like to drink more than 8 cups of water to keep my skin clear.'
});
pad.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'A Pad For My Menstrual Needs';
  changeImg.setAttribute('src', 'images/pad.svg');
  text.innerHTML = 'I used to not carry a pad with me before. Yes, it\'s surprising, but I didn\'t track my period before. '
                    + 'Now I make sure to carry a pad with me because it\'s always a possibility that I\'ll get my period while I\'m in class.';
});
gum.addEventListener('click', function() {
  modal.style.display = 'block';
  contentHead.innerHTML = 'Gum For When I Want A Snack';
  changeImg.setAttribute('src', 'images/gum.svg');
  text.innerHTML = 'I always or at least try to have gum in my bag. ' + 'Sometimes I will have a piece of gum as my breakfast. '
                    + 'But in reality it\'s something for me to chew on until lunch time :-).';
});
close.addEventListener('click', function() {
  modal.style.display = 'none';
});

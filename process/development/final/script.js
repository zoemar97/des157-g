'use strict'
console.log('reading js');

var controller = new ScrollMagic.Controller
var fadeout_tween = TweenMax
  .fromTo('.fade-out', 1, {
    opacity: 1
  }, {
    opacity: 0,
    ease: Circ.easeInOut
  });
var fadein_tween = TweenMax
  .fromTo('.fade-in', 1, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Circ.easeIn
  });
var tween = TweenMax.from('#tent', 1, {
  autoAlpha: 0,
  scale: 0.7
});
var menu = document.querySelector('#menu');
var menuModal = document.querySelector('#menuModal');
var close = document.querySelector('#close');
var anchor_nav = document.querySelector('#nav');
/*page 2 children spawn*/
var pageTwo = document.querySelector('#page2'); //section 2
var sectionW; //width of section
var sectionH; //height of section
var child = document.querySelector('#child'); //child div
var childH;
var childW;
var children = 90; //number of children to spawn
var count = 0; //count so children dont spawn over 50

/*page 3 tents*/
//var numberOfTents = 3;
//var tent = document.querySelector('#tent');
var childInterval;

var generalReset = document.querySelector('#generalReset');
var submitReset = document.querySelector('#submitReset');
var submit = document.querySelector('#submit');
var receipt = document.querySelector('#submitoverlay');
var receiptReset = document.querySelector('#submitReset');
var formContainer=document.querySelector('.container');


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (totalItemsOnPlate >= 4) {
        submit.style.display='block';

      return;
    }
    plateWhole.appendChild(document.getElementById(data));
    totalItemsOnPlate++;
}

generalReset.addEventListener('click', function () {
    window.location.reload();
})
receiptReset.addEventListener('click', function () {
    window.location.reload();
})
submit.addEventListener('click', function (){
  receipt.style.display='block';
  formContainer.style.display='none';
})
function resetForm() {
  console.log('resetForm');
  msgSection.className = 'hide';
}

//function for 2nd page where children spawn
function createChild() {
  if (count < children) {
    var op = 0.1;
    var childImg = document.createElement('img');
    childImg.src = 'images/child.svg';
    childImg.style.width = '75px';
    childImg.style.height = 'auto';
    //childImg.style.zIndex = '2';
    childImg.style.opacity = 0;
    childImg.style.transitionDuration = '1s';


    childW = childImg.offsetWidth;
    childH = childImg.offsetHeight;

    sectionW = pageTwo.offsetWidth; // width of section
    sectionH = pageTwo.offsetHeight; // height of section

    var newLeft = Math.floor(Math.random() * (sectionW - childW)) + 'px';
    var newTop = Math.floor(Math.random() * (sectionH - childH)) + 'px';

    childImg.style.left = newLeft;
    childImg.style.top = newTop;



    child.appendChild(childImg);

    count++;

    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      childImg.style.opacity = op;
      op += 0.1;
    }, 100);

  } else {
    clearInterval(childInterval);
  }
}

//generateTent();

/*function generateTent() {
  for (var i = 0; i < numberOfTents; i++) {
    var tentImg = document.createElement('img');
    tentImg.src = 'images/tent.svg';
    tentImg.style.width = '300px';
    tentImg.style.height = 'auto';

    var xPos = (100 * i) + 'px';
    var yPos = (200 * i) + 'px';
    console.log(xPos);
    console.log(yPos);

    tentImg.style.left = xPos;
    tentImg.style.top = yPos;

    tentImg.style.zIndex = 'i';
    tent.appendChild(tentImg);
  }
}*/
//event listeners for scroll and menu
menu.addEventListener('click', function() {
  menuModal.style.display = ('block');
});
close.addEventListener('click', function() {
  menuModal.style.display = ('none');
});
button.addEventListener('click', function() {
  controller.scrollTo('#page5')
});
//scroll for nav clicks
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.95, {
    scrollTo: {
      y: target,
      autoKill: true // Allow scroll position to change outside itself
    },
    ease: Cubic.easeInOut
  });

});
//function to detect nav to pages
anchor_nav.addEventListener('click', function(e) {
  var target = e.target,
    id = target.getAttribute('href');

  if (id !== null) {
    if (id.length > 0) {
      e.preventDefault();
      controller.scrollTo(id);

      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  }
});

//navigation
new ScrollMagic.Scene({
    triggerElement: '#page1'
  })
  .setClassToggle('#anchor1', 'active')
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#page2'
  })
  .setClassToggle('#anchor2', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#page3'
  })
  .setClassToggle('#anchor3', 'active')
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#page4'
  })
  .setClassToggle('#anchor4', 'active')
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#page5'
  })
  .setClassToggle('#anchor5', 'active')
  .addTo(controller);
//page 1 girl scroll
new ScrollMagic.Scene({
    triggerElement: '#page1',
    triggerHook: 'onLeave',
    duration: '50%'
  })
  .setPin('#girl', {
    pushFollowers: false
  })
  .setTween(fadeout_tween)
  .addTo(controller);
//trigger for function on page 2
new ScrollMagic.Scene({
    triggerElement: '#page2',
  })
  .on('enter', function() {
    childInterval = setInterval(createChild, 200);
  })
  .addTo(controller);
//page 3 tent scroll
new ScrollMagic.Scene({
    triggerElement: '#page3',
    duration: '50%'
  })
  .setTween(tween)
  .addTo(controller);
//page 4 blanket scroll
new ScrollMagic.Scene({
    triggerElement: '#page4',
    duration: '50%'
  })
  .setTween(fadein_tween)
  .setPin('#blanket', {
    pushFollowers: false
  })
  .addTo(controller);
//page 4 boy scrols
new ScrollMagic.Scene({
    triggerElement: '#page4',
    duration: '40%'
  })
  .setTween(fadein_tween)
  .setPin('#boyFloor', {
    pushFollowers: false
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#page4',
    duration: '50%'
  })
  .setTween(fadein_tween)
  .setPin('#boyFloor2', {
    pushFollowers: false
  })
  .addTo(controller);

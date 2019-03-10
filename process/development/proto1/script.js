'use strict'
console.log('reading js');

var controller = new ScrollMagic.Controller({
  addIndicators: true
});

controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: target,
      autoKill: true // Allow scroll position to change outside itself
    },
    ease: Cubic.easeInOut
  });

});
var anchor_nav = document.querySelector('#nav');

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

new ScrollMagic.Scene({
    triggerElement: '#page1',
    triggerHook:0,
    duration: '90%'
  })
  .setPin('#girl', {pushFollowers:false})
  .addTo(controller);

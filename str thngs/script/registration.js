$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

let animation = anime.timeline({
  duration: 1000, 
  easing: 'easeInOutSine',
  direction: 'alternate', 
  loop: true
});           
  
animation.add({
  targets: '.one',
  translateY: -50,
  backgroundColor: 'rgb(255, 0, 0)'
}).add({
  targets: '.two',
  translateY: -50,
  backgroundColor: 'rgb(0, 255, 0)'
}).add({
  targets: '.three',
  translateY: -50,
  backgroundColor: 'rgb(0, 0, 255)'
});
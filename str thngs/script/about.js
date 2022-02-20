// Use at least three event listeners as “click”, “mouseover”, “keypress”;
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function (argument) {
  if (content.className == "open") {
       //shrink the box
       content.className = "";
       button.innerHTML = "Show More"
  } else {
       //expand the box
       content.className = "open";
       button.innerHTML = "Show Less"
  }
};

//Use selectors, methods and events;
const paragraph = document.querySelector("#show-more")

changeColor(paragraph);

function changeColor(element) {
  element.style.backgroundColor = 'black';
}

function mOver(obj) {
  obj.innerHTML = "Read"
}

function mOut(obj) {
  obj.innerHTML = "Show Less"
}

document.getElementById("demo").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "#EEEEEE";
}

var $btnTop = $(".btn-top")
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 20) {
    $btnTop.fadeIn();
  } else {
    $btnTop.fadeOut();
  }
});

$btnTop.on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
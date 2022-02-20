// Create JS objects and its properties;
var person = {
  firstName: "Beybarys",
  lastName: "Rysbek",
  age: 17,
  height: 1.73,

  greet: function() {
    console.log('Hello world!');
  }
};
person.greet();
//document.write(person.firstName);

// Play at least one sound on your page by using JS.
$('html').contextmenu(function (e){e.preventDefault();})

var music = document.getElementById("music");
var isPlaying = false;
music.volume = 0.2;
function togglePlay() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
}
music.onplaying = function () {
  isPlaying = true;
  document.getElementById("music-animation").classList.add("on");
};
music.onpause = function () {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove("on");
};

var button = document.getElementById("toggle");
button.addEventListener(
  "click",
  function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
    } else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
    }
  },
  false
);



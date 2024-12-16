window.onload = function() {
  let text = "Happy Birthday!";
  let i = 0;
  let speed = 100; // speed in milliseconds

  function typeWriter() {
    if (i < text.length) {
      document.querySelector("h1").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  document.querySelector("h1").innerHTML = "";
  typeWriter();
};
window.addEventListener('load', function() {
  var audio = document.getElementById('myAudio');
  audio.play();
 });
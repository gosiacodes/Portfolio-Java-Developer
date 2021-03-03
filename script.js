var i = 0;
var txt = ' design and code, and I love doing it.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("write-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


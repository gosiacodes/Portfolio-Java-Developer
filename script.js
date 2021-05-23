let i = 0;
const txt = ' design and code, and I love doing it.';
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("write-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


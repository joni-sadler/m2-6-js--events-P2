let img;
img = document.querySelector("img");
img.addEventListener('keydown', (e) => {
  if (e.keyCode === 'ArrowUp') {
    img.style.transform = "scale(1.1)";
  } 
  if (e.keyCode === 'ArrowDown') {
    img.style.transform = "scale(0.9)";
  }
})

const button = document.getElementById("change-bg-btn");
const bg = document.body;

const changeClr = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  bg.style.background = `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", changeClr);

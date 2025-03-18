const resultBar = document.querySelector("#resultBar");
const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  if (btn.innerHTML == "C") {
    btn.addEventListener("click", () => {
      resultBar.innerHTML = "";
    });
  } else if (btn.innerHTML == "=") {
    btn.addEventListener("click", () => {
      resultBar.innerHTML = eval(resultBar.innerHTML);
    });
  } else if (btn.innerHTML == "⌫") {
    btn.addEventListener('click' , ()=>{
      resultBar.innerHTML = resultBar.innerHTML.slice(0, -1);
    })
  } else {
    btn.addEventListener("click", () => {
      resultBar.innerHTML += btn.innerHTML;
    });
  }
});

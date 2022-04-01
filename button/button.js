function lineThrough(event) {
  event.target.classList.toggle("line-through");
};

function buttonMaker({text, parent}) {
  this.button = document.createElement("button");
  button.innerText = text;

  this.toggle = () => this.button.addEventListener("mousedown", lineThrough);
  this.toggle();

  this.render = () => parent.appendChild(this.button);
  this.render();
};

const main = document.querySelector("main");

buttonMaker( {text : "우왕 내가", parent : main});
buttonMaker( {text : "버튼을", parent : main});
buttonMaker( {text : "만들다니!!", parent : main});
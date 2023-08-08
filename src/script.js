//Define attributes
// const favourite = document.getElementsByClassName("favouriteButton");
const removeBtn = document.getElementsByClassName("removeButton"); //remove from cart
const btns = document.getElementsByClassName("addBtn"); //Add buttons
const removeValue = document.getElementsByClassName("removeBtn");
const purchase = document.getElementById("purchase");
// const heart = document.getElementById("heart0");
let keyboard = 0,
  mouse = 0,
  keyboardPrice = 50,
  mousePrice = 30,
  keyboardTotalPrice = 0,
  mouseTotalPrice = 0;

//remove elements
removeBtn[0].addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.getElementsByClassName("keyboard")[0];
  element.remove();
});

removeBtn[1].addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.getElementsByClassName("mouse")[0];
  element.remove();
});

//add elemnts
btns[0].addEventListener("click", (e) => {
  e.preventDefault();
  keyboard = document.keyboardForm.keyboard.value;
  const kTotaL = document.getElementById("kTotal");
  if (keyboard >= 0) {
    keyboardTotalPrice = keyboard * keyboardPrice;
    kTotaL.innerText = `selected ${keyboard} ${
      keyboard <= 1 ? "keyboard" : "keyboards"
    } \n price: ${keyboardTotalPrice} $`;
  }
});
btns[1].addEventListener("click", (e) => {
  e.preventDefault();
  mouse = document.mouseForm.mouse.value;
  const mTotaL = document.getElementById("mTotal");
  if (mouse >= 0) {
    mouseTotalPrice = mouse * mousePrice;
    mTotaL.innerText = `selected ${mouse} ${
      mouse <= 1 ? "mouse" : "mouses"
    } \n price: ${mouseTotalPrice} $`;
  }
});

//remove values
removeValue[0].addEventListener("click", () => {
  const kTotaL = document.getElementById("kTotal");
  if (keyboard > 0) {
    --keyboard;
  } else {
    alert("No keyboards selected");
  }
  console.log(keyboard);
  if (keyboard >= 0) {
    keyboardTotalPrice = keyboard * keyboardPrice;
    kTotaL.innerText = `selected ${keyboard} ${
      keyboard <= 1 ? "keyboard" : "keyboards"
    } \n price: ${keyboardTotalPrice} $`;
  }
});
removeValue[1].addEventListener("click", () => {
  const mTotaL = document.getElementById("mTotal");
  if (mouse > 0) {
    --mouse;
  } else {
    alert("No mouses selected");
  }
  if (mouse >= 0) {
    mouseTotalPrice = mouse * mousePrice;
    mTotaL.innerText = `selected ${mouse} ${
      mouse <= 1 ? "mouse" : "mouses"
    } \n price: ${mouseTotalPrice} $`;
  }
});
purchase.addEventListener("click", () => {
  const total = document.getElementById("total");
  total.innerText = `Total price is: ${keyboardTotalPrice + mouseTotalPrice}`;
});

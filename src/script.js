//Define attributes
const favourite = document.getElementsByClassName("favouriteButton"); //Add the attribute of favourite btn
const removeBtn = document.getElementsByClassName("removeButton"); //Add the attribute of remove btn from cart
const btns = document.getElementsByClassName("addBtn"); //Add the attribute of buttons
const removeValue = document.getElementsByClassName("removeBtn"); //Add the attribute of remove btn of values
const purchase = document.getElementById("purchase"); //Add the attribute of purchase btn

//Define attributes
let keyboard = 0,
  mouse = 0,
  keyboardPrice = 50,
  mousePrice = 30,
  keyboardTotalPrice = 0,
  mouseTotalPrice = 0;

//remove element 1
removeBtn[0].addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.getElementsByClassName("keyboard")[0];
  element.remove();
});

//remove element 1
removeBtn[1].addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.getElementsByClassName("mouse")[0];
  element.remove();
});

//add elemnt 1
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

//add elemnt 2
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

//remove values 1
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

//remove values 2
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

//purchase btns
purchase.addEventListener("click", () => {
  const total = document.getElementById("total");
  total.innerText = `Total price is: ${keyboardTotalPrice + mouseTotalPrice} $`;
  keyboardTotalPrice + mouseTotalPrice <= 0 ? alert("No products") : null;
});

//favourite btn 1
favourite[0].addEventListener("click", () => {
  const heart = document.getElementsByClassName("heart")[0];
  heart.classList.toggle("active");
});

//favourite btn 2
favourite[1].addEventListener("click", () => {
  const heart = document.getElementsByClassName("heart")[1];
  heart.classList.toggle("active");
});

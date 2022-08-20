/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Akshat Jain
 *      Student ID: 104222211
 *      Date:       03/04/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
var document = window.document;

//create buttons
function button(name, id) {
  let button = document.createElement("button");
  button.innerText = name;

  button.addEventListener("click", () => {
    setHeader(name);
    updatediv(id);
  });

  return button;
}

//menu buttons
function createmenu() {
  let navbar = document.querySelector("#menu");
  categories.forEach((element) => {
    navbar.appendChild(button(element.name, element.id));
  });
}

//set table header
function setHeader(name = "Potions") {
  document.querySelector("#selected-category").innerHTML = name;
}

function createcard(name, description, price, url) {
  let cdiv = document.createElement("div");
  let cimg = document.createElement("img");
  let cdivcontent = document.createElement("div");
  let cname = document.createElement("h2");
  let cdescription = document.createElement("p");
  let cprice = document.createElement("p");

  cdiv.classList.add("card");
  cimg.classList.add("cardimage");
  cdivcontent.classList.add("cardcontent");
  cprice.classList.add("price");

  cimg.src = url;
  cname.innerText = name;
  cdescription.innerText = description;
  cprice.innerText = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
    price / 100
  );

  cdivcontent.appendChild(cname);
  cdivcontent.appendChild(cdescription);

  cdiv.appendChild(cimg);
  cdiv.appendChild(cdivcontent);
  cdiv.appendChild(cprice);

  return cdiv;
}

//update div when button clicked
function updatediv(id = "c1") {
  let cdiv = document.querySelector("#card-holder");
  cdiv.addEventListener("click", (e) => {
    console.log(e.target);
  });
  cdiv.replaceChildren();

  products.forEach((element) => {
    if (element.categories.includes(id) && element.discontinued === false)
      cdiv.appendChild(
        createcard(element.title, element.description, element.price, element.imageUrl)
      );
  });
}

//to show some table details on startup
function startup() {
  createmenu();
  setHeader();
  updatediv();
}

startup();

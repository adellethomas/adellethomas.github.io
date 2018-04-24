// #3 Create three objects with four properties (one must be an image file path) using object literal notation
var litObjPlant1 = {
  image: "img/suc.jpg",
  make : "High Tide",
  model: "Ceramic",
  price: 39.95
}
var litObjPlant2 = {
  image: "img/suc2.jpg",
  make : "Desert Lover",
  model: "Ceramic",
  price: 45.95
}
var litObjPlant3 = {
  image: "img/suc3.jpg",
  make : "Edgy",
  model: "Ceramic",
  price: 79.95
}
console.log(litObjPlant1, litObjPlant2, litObjPlant3);

// #4 Create the same three objects, with the same four properties, using a constructor notation.
function Plants(image, make, model, price) {
  this.image = image;
  this.make  = make;
  this.model = model;
  this.price = price;
}
var conObj1 = new Plants("img/suc.jpg", "High Tide", "Ceramic", 39.95);
var conObj2 = new Plants("img/suc2.jpg", "Desert Lover", "Ceramic", 49.95);
var conObj3 = new Plants("img/suc3.jpg", "Edgy", "Ceramic", 79.95);

console.log(conObj1, conObj2, conObj3);

// #3 Add to a method each literal object, that multiplies two numbers and returns the product.
var litObjPlant1 = {
  image: "img/suc.jpg",
  make : "High Tide",
  model: "Ceramic",
  price: 39.95,
  salesTax: function() {
    return this.price * 0.09
  }
}
var litObjPlant2 = {
  image: "img/suc2.jpg",
  make : "Desert Lover",
  model: "Ceramic",
  price: 49.95,
  salesTax: function() {
    return this.price * 0.09
  }
}
var litObjPlant3 = {
  image: "img/suc3.jpg",
  make : "Edgy",
  model: "Ceramic",
  price: 79.95,
  salesTax: function() {
    return this.price * 0.09
  }
}
console.log(litObjPlant1.salesTax(), litObjPlant2.salesTax(), litObjPlant3.salesTax());

// #6 Add to the constructor function, create a method that multiplies two numbers and returns the product.
function Plants(image, make, model, price) {
  this.image = image;
  this.make  = make;
  this.model = model;
  this.price = price;
  this.salesTax = function() {
    return this.price * 0.09;
  };
}
var conObj1 = new Plants("img/suc.jpg", "High Tide", "Ceramic", 39.95);
var conObj2 = new Plants("img/suc2.jpg", "Desert Lover", "Ceramic", 49.95);
var conObj3 = new Plants("img/suc3.jpg", "Edgy", "Ceramic", 79.95);

// #7 Add each constructor object to an array.
var plantsArray = [conObj1, conObj2, conObj3];

// #8 Loop through the array of objects
for (var i = 0; i < plantsArray.length; i++) {
  // for each one create an element to add the content to (one needs to be an image element).
  var newDiv  = document.createElement("div")
  var newImg  = document.createElement("img");
  var newH1   = document.createElement("h1");
  var newH2   = document.createElement("h2");
  var newP    = document.createElement("p");
  var newSpan = document.createElement("span");
  console.log(newDiv, newImg, newH1, newH2, newP, newSpan);

  // #9 Still in the loop, create text nodes for each piece of content
  var newH1Text   = document.createTextNode(plantsArray[i].make);
  var newH2Text   = document.createTextNode(plantsArray[i].model);
  var newPText    = document.createTextNode("price: " + plantsArray[i].price);
  var newSpanText = document.createTextNode("sales tax: " + plantsArray[i].salesTax());
  console.log(newH1Text, newH2Text, newPText, newSpanText);

  // add those to the elements you created.
  newH1.appendChild(newH1Text);
  newH2.appendChild(newH2Text);
  newP.appendChild(newPText);
  newSpan.appendChild(newSpanText);

  // #10 Still in the loop, update the source and alt attributes of the image.
  newImg.src = plantsArray[i].image;
  newImg.alt = plantsArray[i].make + " " + plantsArray[i].model;

  // #12 Add the elements to the HTML so a user can view them.
  newDiv.appendChild(newImg);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newSpan);

  document.getElementById("display").appendChild(newDiv)
}

let form = document.querySelector("#form");
let nameInput = document.getElementById("username");
let phonenumber = document.getElementById("phonenumber");
let address = document.getElementById("address");
let errorMessage1 = document.querySelector(".error-msg1");
let errorMessage2 = document.querySelector(".error-msg2");
let errorMessage3 = document.querySelector(".error-msg3");


var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");
var thickness = 0;
var thicknessBoxes = document.getElementsByName("thickness");
var size = 0;
var sizeBoxes = document.getElementsByName("size");
var toppings = 0;
var toppingBoxes = document.getElementsByName("toppings");
var adding = 0;
var addingBoxes = document.getElementsByName("adding");

nameInput.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 3) {
        errorMessage1.classList.remove("error-msg--hidden1")
    } else if (inputValue.length >= 3) {
        errorMessage1.classList.add("error-msg--hidden1")
    } else {

    }
})

phonenumber.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 7) {
        errorMessage2.classList.remove("error-msg--hidden2")
    } else if (inputValue.length >= 7) {
        errorMessage2.classList.add("error-msg--hidden2")
    } else {

    }
})

address.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 4) {
        errorMessage3.classList.remove("error-msg--hidden3")
    } else if (inputValue.length >= 4) {
        errorMessage3.classList.add("error-msg--hidden3")
    } else {

    }
})

form.addEventListener("submit", function (processFood) {
    processFood.preventDefault();

    nameInput.value = "";
    phonenumber.value = "";
    address.value = "";

    alert("Your purchase has been confirmed!");

    for (var i = 0; i < thicknessBoxes.length; i++){
        if (thicknessBoxes[i].checked) {
          thickness++;
          foodInfo["thickness" + thickness] = thicknessBoxes[i].value;
        }
    }

    foodInfo.thickness = document.getElementById("thickness").value;

    for (var i = 0; i < sizeBoxes.length; i++){
        if (sizeBoxes[i].checked) {
          size++;
          foodInfo["size" + size] = sizeBoxes[i].value;
        }
    }

    foodInfo.size = document.getElementById("size").value;

    for (var i = 0; i < toppingBoxes.length; i++){
        if (toppingBoxes[i].checked) {
          toppings++;
          foodInfo["topping" + toppings] = toppingBoxes[i].value;
        }
    }

    for (var i = 0; i < addingBoxes.length; i++){
        if (addingBoxes[i].checked) {
          adding++;
          foodInfo["adding" + adding] = addingBoxes[i].value;
        }
    }

  foodSummary.innerHTML += "<p><strong>Order:</strong></p>";
  foodSummary.innerHTML += "<p><span> <strong>Name</strong> </span>: " + nameInput.value + "</p>";
  foodSummary.innerHTML += "<p><span><strong>Phone</strong> </span>: " + phonenumber.value + "</p>";
  foodSummary.innerHTML += "<p><span><strong>Address</strong></span>: " + address.value + "</p>";
  foodSummary.innerHTML += "<hr>";
  foodSummary.innerHTML += "<p><span><strong>Dough thickness</strong></span>: " + foodInfo.thickness + "</p>";
  foodSummary.innerHTML += "<p><span><strong>Size</strong></span>: " + foodInfo.size + "</p>";
  foodSummary.innerHTML += "<p><span><strong>Topping(s)</strong></span>: " + "</p>";
  foodSummary.innerHTML += "<ul>";

  for (var i = 1; i < 7; i++) {
    if (foodInfo["topping" + i]) {
      foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
    }
  }

  foodSummary.innerHTML += "<ul>";
  foodSummary.innerHTML += "<p><span><strong>Add:</strong></span>: " + "</p>";
  foodSummary.innerHTML += "<ul>";

  for (var i = 1; i < 3; i++) {
    if (foodInfo["adding" + i]) {
      foodSummary.innerHTML += "<li>" + foodInfo["adding" + i] + "</li>";
    }
  }

  foodSummary.innerHTML += "<ul>";
  foodSummary.innerHTML += "<br>";
  foodSummary.innerHTML += "<hr class='red'>";
  foodSummary.innerHTML += "<br>";
  document.getElementById("order").style.display = "block";

});

//business-logic
var globalPizza;

function Pizza(userSize, userToppings) {
  this.size = userSize;
  this.toppings = userToppings;
}

Pizza.prototype.toppingsList = function(){
  var toppingsList = "";
  for(var i = 0; i < this.toppings.length; i++) {
    toppingsList = toppingsList + this.toppings[i];
  }
  return toppingsList;
}

Pizza.prototype.finalPrice = function(){
  var sizePrice = 0;
  var toppingPrice = 1 * this.toppings.length;
  if (this.size == "Personal Pizza") {
    sizePrice = 7;
  } else if (this.size == "Small Pizza") {
    sizePrice = 9;
  } else if (this.size == "Medium Pizza") {
    sizePrice = 11;
  } else if (this.size == "Large Pizza") {
    sizePrice = 13;
  } else if (this.size == "Family Pizza") {
    sizePrice = 15;
  }
  var price = sizePrice + toppingPrice;
  return price;
}

function updatePizza(){
  var size = $("input[name='size']:checked").val();
  var toppings = []; $("input[name='toppings']:checked").each(function(i,v){
    toppings.push($(v).val());
  });

  if (globalPizza != null) {
    globalPizza.size = size;
    globalPizza.toppings = toppings;
  } else {
    globalPizza = new Pizza(size, toppings);
  }
}

function makePizza(){
  updatePizza();
  $("h5#final-price").show();
  $("h5#final-price").text("Your final total is" + " " + "$" + globalPizza.finalPrice());
  $("h5#user-total").hide();

}

function checkOrder() {
  updatePizza();
  $("h5#user-total").show();
  $("h5#user-total").text("Your total so far is" + " " + "$" + globalPizza.finalPrice());
  $("h5#final-price").hide();
};

function deliverOrder() {
  $(".total-top").show();
  $("h5#final-total").text("Your final total is" + " " + "$" + globalPizza.finalPrice());
  $(".delivery-info").show();
  $("#pizza-info").hide();
  $(".pick-up-message").hide();
}

function pickUp() {
  $(".total-top").show();
  $("h5#final-total").text("Your final total is" + " " + "$" + globalPizza.finalPrice());
  $(".pick-up-message").show();
  $("#pizza-info").hide();
  $(".delivery-info").hide();
  $(".order-method").hide();
}

function confirmFinish() {
  $(".final-message").show();
  $(".confirm-delivery").hide();
  $(".pizza-info").hide();
  $(".order-method").hide();
}

// function confirmAddress() {
//   $(".confirm-delivery").show();
//   $(".delivery-info").hide();
//   $(".pick-up-message").hide();
// }

function Contact(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


//user-logic

$(document).ready(function() {
  $("form#new-delivery").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState);

    $(".delivery-info").hide();
    $(".confirm-delivery").show();
    $(".final-total").text(" " + "$" + globalPizza.finalPrice());
    $(".full-name").text(newContact.fullName);
    $(".street").text(newContact.street);
    $(".city").text(newContact.city);
    $(".state").text(newContact.state);
    // };

    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  });

});
//

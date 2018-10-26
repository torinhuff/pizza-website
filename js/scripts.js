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
  $("p#final-price").text("$" + globalPizza.finalPrice());
}

function checkOrder() {
  updatePizza();
  $("p#user-total").text("$" + globalPizza.finalPrice());
};

function deliverOrder() {
  $(".delivery-info").show();
  $(".pick-up-message").hide();
}

function pickUp() {
  $(".pick-up-message").show();
  $(".delivery-info").hide();
}

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
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
    });

  });
});

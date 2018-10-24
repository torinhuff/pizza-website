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
  var toppingPrice = 3 * this.toppings.length;
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

function makeOrder() {
  updatePizza();
  $("p#user-total").text("$" + globalPizza.finalPrice());
};


//user-logic

// $(document).ready(function() {
//     event.preventDefault();
//
//   });
// });

//business-logic

function Pizza(userSize, userToppings) {
  this.size = userSize;
  this.toppings = userToppings;
}

Pizza.prototype.alertSize = function() {
  if (this.size == "personal") {
    alert("Personal Pizza")
  } else if (this.size == "small") {
    alert("Small Pizza")
  } else if (this.size == "medium") {
    alert("Medium Pizza")
  } else if (this.size == "large") {
    alert("Large Pizza")
  } else if (this.size == "family") {
    alert("Family Pizza")
  }
}

Pizza.prototype.alertToppings = function(){
  var toppingsList = "";
  for(var i = 0; i < this.toppings.length; i++) {
    toppingsList = toppingsList + this.toppings[i];
  }
  alert(toppingsList);
}





//user-logic

$(document).ready(function() {
  $("form#pizza-size").submit(function(event) {
    event.preventDefault();

  });
});

function makePizza(){
  var size = $("input[name='size']:checked").val();
  var toppings = []; $("input[name='toppings']:checked").each(function(i,v){
  toppings.push($(v).val());
});
  alert(toppings)
  var newPizza = new Pizza(size, toppings);
  newPizza.alertSize();
  newPizza.alertToppings();
}

function Pizza(toppings, size, type) {
  this.toppings = toppings;
  this.size = size;
  this.type = type;
  this.cost = 0;
};

Pizza.prototype.addPrice = function () {
  var i = 0;
  this.toppings.map(function (num) {
    return i += 1;
  })
  this.cost = i;
  if (this.size === "large") {
    console.log(this.cost)
    this.cost += 10;
  } else if (this.size === "small") {
    this.cost += 5;
  } else {
    alert("pick a size")
  }
  return this.cost
};

$(document).ready(function () {
  $("form#pizzas").submit(function (event) {
    event.preventDefault()
    var size = $("input[name=size]:checked").val();
    var selectedPizza = $("input[name=pizzaChoice]:checked").val();
    var toppingArray = [];
    $(".t:checked").each(function () {
      toppingArray.push($(this).val());
    })
    var myPizza = new Pizza(toppingArray, size, selectedPizza)
    myPizza.addPrice()
    $("#cart").text(myPizza.type)
    $("#total").text(myPizza.cost)
  })
})
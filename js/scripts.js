
function Pizza (toppings, size, type ){
  this.toppings = toppings;
  this.size = size;
  this.type = type;
  this.cost = 0;
};
Pizza.prototype.addPrice = function(){
  var i = 0;
  this.toppings.map(function(num){
    return i += 1;
  })




  $(document).ready(function() {
    $("form#pizzas").submit(function(event) {
      event.preventDefault()
      var size = $("input[name=size]:checked").val();
      var selectedPizza = $("input[name=pizzaChoice]:checked").val();
      var toppingArray = [];
      $("#t:checked").each(function(){
        toppingArray.push($(this).val());
        console.log(toppingArray)
      })
      var myPizza = new Pizza (toppingArray, size, selectedPizza)
      myPizza.addPrice()
      $("#cart").text(myPizza.type)
      $("#total").text(myPizza.cost)
      console.log(myPizza)
    })
  })
  
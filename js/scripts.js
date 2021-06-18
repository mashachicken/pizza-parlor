
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
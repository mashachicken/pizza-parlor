# Pizza Ordering Website , June 18, 2021

#### By Masha Ivy

## Description

_A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

## Specs
```
Describe: Pizza.addPrice()
Test: The program will calculate price value when small size is selected
Code: selectedPizza.addPrice(); size === 'small'
Expected Result: this.cost += 5;

```
```
Describe: Pizza.addPrice()
Test: The program will calculate price value when large size is selected
Code: selectedPizza.addPrice(); size === 'large'
Expected Result: this.cost += 10;

```
```
Describe: Pizza.addPrice()
Test: The program will calculate price based on topping added
Code: selectedPizza.addPrice(); this.topping === 'pinapple'
Expected Result: this.cost += 1;

```
```
Describe: Pizza.addPrice()
Test: Wil return a 'Pick a size' message if no size or topping is selected 
Code: selectedTopping is undefined
Expected Output: alert("pick a size")
```
```

Describe: Pizza()
Test: The program will allow user to choose toppings 
Code: const selectedTopping = $("#t:checked").val();
Expected Output: selected topping = pinapple;

```
```
Describe: Pizza.addPrice()
Test: The program will then calculate the total cost of pizza 
Code: selectedPizza.cost;
Expected Output: this.cost = 10

```
```

## Setup/Installation Requirements

To check out my website, visit my GitHub page. Below I will attach a direct link to my repository

* Open the terminal and enter "git clone https://github.com/mashachicken/pizza-parlor.git"
* Press enter. Your local clone will be created
* Open the index.html file in a browser of your choice
* View the document

## Known Bugs
No known bugs, if you find any,  please contact me

## Support and contact details
Feel free to contact me via my email:
mashaivy9@gmail.com

## Technologies Used
This website has been created using HTML, CSS and JavaScript.

### License
MIT license

Copyright (c) 2021 **Masha Ivy**
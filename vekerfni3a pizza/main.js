"use strict"
var Pizza = {
	size: ["Large", "medium", "small"],
	price: {},
	toppings: ["ostur", "skinka", "nautahakk", "pepperoni", "ananas", "rjomaost", "mais", "sveppir"]
	
};

function PizzaReady(name, size, price, toppings)
{
	this.name = name;
	this.size = size;
	this.price = price;
	this.toppings = toppings;

}


var elPizza1 = document.getElementById("pizza1");
var elPizza2 = document.getElementById("pizza2");
var elPizza3 = document.getElementById("pizza3");
var elPizza4 = document.getElementById("pizza4");


var Margarita = new PizzaReady("Margarita", Pizza.size[0], 1800, Pizza.toppings[0]);
var Hawaiian = new PizzaReady("Hawaiian", Pizza.size[0], 2500, Pizza.toppings[0] + " " + Pizza.toppings[1] + " " + Pizza.toppings[4]);
var Basic = new PizzaReady("Basic", Pizza.size[0], 2600, Pizza.toppings[0] + " " + Pizza.toppings[1] + " " + Pizza.toppings[7]);
var Svepperoni = new PizzaReady("Svepperoni", Pizza.size[0], 4500, Pizza.toppings[0] + " " + Pizza.toppings[3] + " " + Pizza.toppings[7]);


elPizza1.textContent = Svepperoni.name + "  ---  " + Svepperoni.size + "  ---  " + Svepperoni.price + "kr  ---  " + Svepperoni.toppings;
elPizza2.textContent = Margarita.name + "  ---  " + Margarita.size + "  ---  " + Margarita.price + "kr  ---  " + Margarita.toppings;
elPizza3.textContent = Basic.name + "  ---  " + Basic.size + "  ---  " + Basic.price + "kr  ---  " + Basic.toppings;
elPizza4.textContent = Hawaiian.name + "  ---  " + Hawaiian.size + "  ---  " + Hawaiian.price + "kr  ---  " + Hawaiian.toppings;

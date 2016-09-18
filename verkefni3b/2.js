var Hund = {
	nafn: "Debra",
	type: "labrador"
}

var Jacob = {
	type: "human",
	animal: Hund.nafn,
}

console.log(Jacob.animal);


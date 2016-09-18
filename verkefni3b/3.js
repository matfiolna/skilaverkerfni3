function DateBase (){
}


DateBase.prototype.name = "SpaceRacer";
DateBase.prototype.life = 10;
DateBase.prototype.showName = function ()
{
	console.log(this.name);
}



var first = new DateBase();
var second= new DateBase();
var third = new DateBase();


first.name = "First";
DateBase.prototype.speed = 5;
DateBase.prototype.fly = function()
{
	this.speed +=1;
}
second.fly(); // bara second fekk fly action
var fourth = new DateBase();


DateBase.prototype.shoot = function()
{

		first.life -=1;
		second.life -=1;
		third.life -=1;
}


fourth.shoot();
console.log("life first:" + first.life);

console.log("First:");
first.showName();
console.log("first life:"+first.life);
console.log("first speed:"+first.speed);

console.log("Second");
first.showName();
console.log("second life:"+second.life);
console.log("second speed:" +second.speed);

console.log("Third");
first.showName();
console.log("third life:"+third.life);
console.log("third speed:"+third.speed);

console.log("Fourth");
first.showName();
console.log("foruth life:"+fourth.life);
console.log("foruth speed:"+fourth.speed);



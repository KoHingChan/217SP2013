/*function Car ( model ) {

	this.model = model;
	this.color = "silver";
	this.year = "2012";
	
	this.getInfo = function () {
return this.model + " " + this.year;
};

};

var myCar = new Car("ford");
myCar.year = "2010";
console.log ( myCar.getInfo() );

var div = document.getElementById('header');

var a = document.createElement('a');

a.textContent = 'click me';

a.href = 'http://www.google.com';
console.log(div);
div.appendChild(a);
div.setAttribute("class","green");*/

function mLinks(array){
	var mLink = [];
	for (i=0; i<array.length; i++) {
		var one = document.createElement('a');
		one.href = array[i];
		one.textContent = i+1;
		mLink.push(one);
	}
	return mLink;
};

var some = ['http://www.google.com','http://www.yahoo.com'];

console.log(mLinks(some));

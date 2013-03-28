function dog(pooch)(){
	this.hair = pooch.color|| "brown";
	this.size = pooch.sml|| "large";
}

function doggie() {}

doggie.prototype.eh = dog;
doggie.prototype.meh = function(dog){
	if (pooch.eh === "dog"){
		this.eh = dog;
	}else{
		this.eh = break;
	}
	return new this.eh(pooch);
	
};

var a = new doggie();
var b = a.meh({
	eh: "dog",
	color: "red",
	sml: "big"
});

console.log(b);

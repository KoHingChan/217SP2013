function sandwich (stuff) {
    this.meat = stuff.meat || "ham";
    this.cheese = stuff.cheese || "american";
    this.size = stuff.size || "medium";
    this.bread = stuff.bread || "white";
    
}

function drink (stuff) {
    this.soda = stuff.soda || "coke";
    this.juice = stuff.juice || "apple";
    this.water = stuff.water || "water";
    this.coffee = stuff.coffee || "black";
    
}

function lunchfactory() {}

lunchfactory.prototype.lunchClass = sandwich;

lunchfactory.prototype.createMeal = function(stuff) {
    if (stuff.lunchClass === "sandwich"){
        this.lunchClass = sandwich;
    }else{
        this.lunchClass = drink;
    }
    return new this.lunchClass (stuff);
};

var firstitem = new lunchfactory();
var firstmeal = firstitem.createMeal({
    lunchClass: "sandwich",
    meat:  "roast beef",
    cheese: "provolone",
    size: "large",
    bread: "rye"
});

console.log( firstmeal instanceof sandwich);

console.log( firstmeal );

var headline = document.getElementById("hereyago");

headline.innerHTML = console.info(sandwich)
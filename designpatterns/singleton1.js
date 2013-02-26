var singleton = (function(){

    var instance;
    
    function init(){
        function privateTime(){
            console.log("Not for your eyes to see mortal.");
        }
        
        var privateItem = "Go AWAY";
        
        return{
            publicTime: function(){
                console.log("I crave attention!");
            },
            
            publicItem: "I to like to live on the public side."
        };
    };
    
    return {
        getFunky: function () {
            if (!funky) {
                funky = init();
            }
            return funky;
        }
    };
})();

var sing1 = singleton;
var sing2 = singleton;

console.log( sing1 === sing2 );

var headline = document.getElementById("hereyago");

headline.innerHTML = console.log(sing1 === sing2);
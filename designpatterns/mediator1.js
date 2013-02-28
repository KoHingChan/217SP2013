var mediator = (function(){
    var magazines = {};
    var subscribe = function(article,page){
        if (!magazines[article]){ 
            magazines[article] =[];
        }
        magazines[article].push({context:this, callback:page });
        return this;
    };
    
    var publish = function( article ){
        var pirate;
        if (!magazines[article] ){
            return false;
        } 
        pirate = Array.prototype.slice.call( things, 1 );
        for ( var i = 0, l = magazines[article].length; i<l; i++ ) {
            var subscription = magazines[article][i];
            subscription.callback.apply( subscription.context, pirate );
        }
        return this;
    };
    
    return{
        publish: publish,
        subscribe: subscribe,
        installTo: function( object ){
            object.subscribe = subscribe;
            object.publish = publish;
        }
    };
    
} ());

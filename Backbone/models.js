APP.Models.Slide = Backbone.Model.extend({
    defaults: {
        id: 1,
        headline: 'StockPhoto',
        caption: 'AnimalName'
    },
    
    show: function(){
        this.getEl().show();
    },
    
    getEl: function() {
        return $('#slide-' + this.id);
    },
    
    getControl: function() {
        return $('.jump-to').eq(this.id - 1);
    }
});
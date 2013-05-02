function($, _, Backbone) {
    var imgur = Backbone.Collection.extend({
        url: function() {
            return "https://api.imgur.com/3/"
        }
    })
}
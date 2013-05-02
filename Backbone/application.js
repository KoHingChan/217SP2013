(function() {
  
  // configuration for underscores template syntax
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  // app namespace setup
  APP = {
      Views: {},
      Models: {},
      Collections: {}
  };

$.ajaxPrefilter( function( options, originalOptions, jqXHR) {
    options.url = 'http://web.njit.edu/~kc99/217SP2013/Backbone/index.html' + options.url;
});
  
var slides = Backbone.Collection.extend({
        url: '/slides'
    });
  
var ItemList = Backbone.View.extend({
    el: '#slideshow',
    render: function() {
        slides.fetch({
            success: function(){
                var template1 = _.template($('#template1').html(), {slides: slides.models});
                    this.$el.html(template1)
            }
        })
    }
});
  
var Router = Backbone.Router.extend({
    routes: {
        '' : 'index',
        'slideshow' : 'Slideshow',
        'slides' : 'Slides'
    }
});

Backbone.history.start();
  
  // a simple slide model
APP.Models.Slide = Backbone.Model.extend({
      defaults: {
          id: 1,
          headline: 'Animals',
          caption: 'Slide',
          layout: 'right'
      },

      show: function() {
          this.getEl().show();
      },

      getEl: function() {
          return $('#slide-' + this.id);
      },

      getControl: function() {
          return $('.jump-to').eq(this.id - 1);
      }
  });

  // and a simple collection that holds slides
  APP.Collections.Slides = Backbone.Collection.extend({
      model: APP.Models.Slide
  });
  
  
})();
var Slides = {};

Slides.Collection = Backbone.Collection.extend({
   url: '/slides' 
});

Slides.Views = {};

Slides.Views.Edit = Backbone.View.extend({
    change: function(){
        this.model.set({
            name: $(this.el).children('input').val()
        });
        this.model.save();
    },
    destroy: function(){
        var el = this.el;
        this.model.destroy({
            success: function(){
                $(el).remove();
            }
        });
    },
    events: {
        'click button' : 'destroy',
        'change input' : 'change'
    },
    initialize: function() {
        _(this).bindAll('change','destroy','render');
    },
    render: function() {
        $('#slides-template').tmpl(this.model.toJSON()).appendTo(this.el);
            this.delegateEvents();
    }
});

Slides.Views.List = Backbone.View.extend({
    append: function(model) {
        var p = $('<p>').appendTo('#slides'),
            view = new Slides.Views.Edit({
                model: model,
                el: p[0]
            });
        view.render();
    },
    initialize: function(){
        _(this).bindAll('append','render');
        this.collection.bind('refresh',this.render);
        this.collection.bind('add', this.append);
    },
    render: function(){
        $('#slides').empty();
        this.collection.each(function(model) {
            this.append(model);
            }, this);
    }
});

$(function(){
    var collection = new Slides.Collection(),
        view = new Slides.Views.List({
            collection: collection
        });
        
    collection.fetch();
    
    $('#add').click(function(){
        var model = new Backbone.Model({
            name: $('#new-name').val()
        });
        collection.add(model);
        model.save();
    });
});
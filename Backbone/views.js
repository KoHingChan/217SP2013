<script type="text/template" id="user-list-template">
            
            <h4>Something</h4>
            
            </script>
            
            
            <script>
                
                $.ajaxPrefilter( function( options, originalOptions, jqXHR) {
                    options.url = 'http://web.njit.edu/~kc99/217SP2013/Backbone/index.html' + options.url;
                });
                
                var Users = Backbone.Collection.extend({
                    url: '/users'
                });
                
                var UserList = Backbone.View.extend({
                    el: '.page',
                    render: function() {
                        var that = this;
                        var users = new Users();
                        users.fetch({
                            success: function() {
                                //var template = _.template($('#user-list-template').html(), {users: users.models});
                                that.$el.html('what what');
                            }
                        })
                    }
                });
                
                var Router = Backbone.Router.extend({
                    routes: {
                        '': 'home'
                    }
                });
                
                var userList = new UserList();
                
                var router = new Router();
                router.on('route:home', function(){
                    userList.render();
                });
                
                Backbone.history.start();
                
            </script>
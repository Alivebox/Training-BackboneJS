define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/mymovies/MyMoviesView',
        'views/mywishlist/MyWishlistView'
    ],
    function ($, _, Backbone, MyMoviesView, MyWishlistView) {
        var AppRouter = Backbone.Router.extend({
            routes:{
                'mymovies':'showMyMovies',
                'mywishlist':'showMyWishlist',
                '*actions':'showMyMovies'
            }
        });

        return {

            init:function () {
                var tmpAppRouter = new AppRouter();
                tmpAppRouter.on('route:showMyMovies',this.showMyMovies);
                tmpAppRouter.on('route:showMyWishlist',this.showMyWishlist);
                Backbone.history.start();
            },

            showMyMovies: function(){
                var tmpMyMoviesView = new MyMoviesView();
                tmpMyMoviesView.render();
            },

            showMyWishlist: function(){
                var tmpMyWishlistView = new MyWishlistView();
                tmpMyWishlistView.render();
            }

        };

    }
);
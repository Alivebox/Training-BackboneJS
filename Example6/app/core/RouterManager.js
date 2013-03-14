define(
    [
        'backbone',
        'views/mymovies/MyMoviesView',
        'views/mywishlist/MyWishlistView',
        'jquery',
        'underscore'
    ],
    function (Backbone, MyMoviesView, MyWishlistView, $, _) {

        var AppRouter = Backbone.Router.extend({
            routes:{
                'mymovies':'showMyMovies',
                'mywishlist':'showMyWishlist',
                '*actions':'showMyMovies'
            }
        });

        return {

            firstPage: true,
            currentPage: undefined,

            init:function () {
                var tmpAppRouter = new AppRouter();
                tmpAppRouter.on('route:showMyMovies',this.showMyMovies,this);
                tmpAppRouter.on('route:showMyWishlist',this.showMyWishlist,this);
                Backbone.history.start();
            },

            showMyMovies: function(){
                var tmpMyMoviesView = new MyMoviesView();
                this.showPage(tmpMyMoviesView);
            },

            showMyWishlist: function(){
                var tmpMyWishlistView = new MyWishlistView();
                this.showPage(tmpMyWishlistView);
            },

            showPage: function(argPage){
                this.currentPage = argPage;
                $.mobile.changePage($(this.currentPage.el), {
                    changeHash:false
                });
            }

        };

    }
);
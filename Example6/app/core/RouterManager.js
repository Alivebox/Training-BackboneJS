define(
    [
        'backbone',
        'views/mymovies/MyMoviesView',
        'views/mywishlist/MyWishlistView'
    ],
    function (Backbone, MyMoviesView, MyWishlistView) {

        var AppRouter = Backbone.Router.extend({
            routes:{
                'mymovies':'showMyMovies',
                'mywishlist':'showMyWishlist',
                '*actions':'showMyMovies'
            }
        });

        return {

            firstPage: true,

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
                tmpMyWishlistView.render();
            },

            showPage: function(argPage){
                $(argPage.el).attr('data-role', 'page');
                argPage.render();
                $('body').append($(argPage.el));
                var tmpTransition = $.mobile.defaultPageTransition;
                if (this.firstPage) {
                    tmpTransition = 'none';
                    this.firstPage = false;
                }
                $.mobile.changePage($(argPage.el), {
                    changeHash:false,
                    transition: tmpTransition
                });
            }

        };

    }
);
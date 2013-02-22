define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!views/bottommenubar/template/bottomMenuBarTemplate.html'
    ],
    function ($, _, Backbone, argBottomMenuBarTemplate) {

        var BottomMenuBarView = Backbone.View.extend({

            el:$("#bottomMenuContainer"),

            events: {
                'click div#myMoviesOption': 'onMyMoviesOptionSelected',
                'click div#myWishlistOption': 'onMyWishlistOptionSelected'
            },

            render:function () {
                $(this.el).html(argBottomMenuBarTemplate);
            },

            onMyMoviesOptionSelected: function(){
                window.location = '#mymovies';
            },

            onMyWishlistOptionSelected: function(){
                window.location = '#mywishlist';
            }

        });

        return BottomMenuBarView;

    }
);

define(
    [
        'jquery',
        'backbone',
        'text!views/mymovies/template/myMoviesTemplate.html'
    ],
    function ($, Backbone, argMyMoviesTemplate) {

        var MyMoviesView = Backbone.View.extend({

            render:function () {
                $(this.el).html(argMyMoviesTemplate);
                return this;
            }

        });

        return MyMoviesView;

    }
);

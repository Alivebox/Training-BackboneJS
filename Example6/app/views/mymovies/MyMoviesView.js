define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!views/mymovies/template/myMoviesTemplate.html'
    ],
    function ($, _, Backbone, argMyMoviesTemplate) {

        var MyMoviesView = Backbone.View.extend({

            el:$("#contentContainer"),

            render:function () {
                $(this.el).html(argMyMoviesTemplate);
            }

        });

        return MyMoviesView;

    }
);

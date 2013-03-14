define(
    [
        'jquery',
        'backbone',
        'text!views/mymovies/template/myMoviesTemplate.html'
    ],
    function ($, Backbone, argMyMoviesTemplate) {

        var MyMoviesView = Backbone.View.extend({

            el:"#mymovies",

            initialize: function(){
                this.render();
            },

            render:function () {
                $(this.el).html(argMyMoviesTemplate);
                $(this.el).on('pagebeforeshow', $.proxy(this.onPageBeforeShow,this));
                $(this.el).on('pagebeforehide', $.proxy(this.onPageBeforeHide,this));
                return this;
            },

            onPageBeforeShow: function(){
                this.triggerPageCreation();
            },

            triggerPageCreation: function(){
                $(this.el).trigger('pagecreate');
            },

            onPageBeforeHide: function(){
                this.undelegateEvents();
                $(this.el).off('pagebeforeshow');
                $(this.el).off('pagebeforehide');
            }

        });

        return MyMoviesView;

    }
);

define(
    [
        'jquery',
        'backbone',
        'handlebars',
        'templates/compiled/myMoviesTemplate'
    ],
    function ($, Backbone, Handlebars) {

        var MyMoviesView = Backbone.View.extend({

            el:"#mymovies",

            initialize: function(){
                this.render();
            },

            render:function () {
                var tmpTemplate = Handlebars.templates['myMoviesTemplate.html']({
                    description: 'My Movies are going to be here!! Yeah!!!'
                });
                $(this.el).html(tmpTemplate);
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

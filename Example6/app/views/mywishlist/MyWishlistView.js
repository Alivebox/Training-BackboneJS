define(
    [
        'jquery',
        'backbone',
        'handlebars',
        'templates/compiled/myWishlistTemplate'
    ],
    function ($, Backbone, Handlebars) {

        var MyWishListView = Backbone.View.extend({

            el:"#mywishlist",

            initialize: function(){
                this.render();
            },

            render:function () {
                var tmpTemplate = Handlebars.templates['myWishlistTemplate.html']({
                    description: 'My Wishlist is going to be here!! Yeah!!!'
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

        return MyWishListView;

    }
);

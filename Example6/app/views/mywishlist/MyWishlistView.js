define(
    [
        'jquery',
        'backbone',
        'text!views/mywishlist/template/myWishlistTemplate.html'
    ],
    function ($, Backbone, argMyWishlistTemplate) {

        var MyWishListView = Backbone.View.extend({

            el:"#mywishlist",

            initialize: function(){
                this.render();
            },

            render:function () {
                $(this.el).html(argMyWishlistTemplate);
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

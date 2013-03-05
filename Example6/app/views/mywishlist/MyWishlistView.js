define(
    [
        'jquery',
        'backbone',
        'text!views/mywishlist/template/myWishlistTemplate.html'
    ],
    function ($, Backbone, argMyWishlistTemplate) {

        var MyWishListView = Backbone.View.extend({

            el:$("#contentContainer"),

            render:function () {
                $(this.el).html(argMyWishlistTemplate);
            }

        });

        return MyWishListView;

    }
);

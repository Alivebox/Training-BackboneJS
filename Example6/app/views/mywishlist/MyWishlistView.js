define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!views/mywishlist/template/myWishlistTemplate.html'
    ],
    function ($, _, Backbone, argMyWishlistTemplate) {

        var MyWishListView = Backbone.View.extend({

            el:$("#contentContainer"),

            render:function () {
                $(this.el).html(argMyWishlistTemplate);
            }

        });

        return MyWishListView;

    }
);

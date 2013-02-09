/**
 * Here we create a simple view
 */

(function($){

    var ListView = Backbone.View.extend({

        el: $('body'),

        initialize: function(){
            _.bindAll(this,'render');
            this.render();
        },

        render: function(){
            $(this.el).append("<ul><li>Example 1</li></ul>");
        }

    });

    var listView = new ListView();

})(jQuery)
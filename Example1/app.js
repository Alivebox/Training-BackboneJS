(function($){

    var SimpleView = Backbone.View.extend({

        el: $('body'),

        initialize: function(){
            _.bindAll(this,'render');
            this.render();
        },

        render: function(){
            debugger;
            $(this.el).append("<label>Example 1</label>");
        }

    });

    var simpleView = new SimpleView();

})(jQuery)
(function($){

    var Item = Backbone.Model.extend({
        defaults: {
            part1: 'hello',
            part2: 'world'
        }
    });

    var ItemsCollection = Backbone.Collection.extend({
        model: Item
    });

    var ListView = Backbone.View.extend({

        el: $('body'),

        events: {
            'click button#add': 'addItem'
        },

        initialize: function(){
            _.bindAll(this,'render','addItem','appendItem');
            this.initializeItemsCollection();
            this.counter = 0;
            this.render();
        },

        initializeItemsCollection: function(){
            this.itemsCollection = new ItemsCollection();
            this.itemsCollection.bind('add',this.appendItem);
        },

        render: function(){
            $(this.el).append("<button id='add' >Add List Item </button>");
            $(this.el).append("<ul></ul>");
            this.addExistingItemsToListView();
        },

        addExistingItemsToListView: function(){
            var self = this;
            _(this.itemsCollection.models).each(function(argItem){
                self.appendItem(argItem);
            },this);
        },

        addItem: function(){
            this.counter++;
            var tmpItem = new Item();
            tmpItem.set({
                part2: tmpItem.get('part2') + " " + this.counter
            });
            this.itemsCollection.add(tmpItem);
        },

        appendItem: function(argItem){
            $('ul', this.el).append("<li>" + argItem.get('part1') + " " + argItem.get('part2') + "</li>");
        }

    });

    var listView = new ListView();

})(jQuery)
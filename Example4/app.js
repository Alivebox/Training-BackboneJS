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

        tagName: 'ul',
        collection: undefined,
        listItemViewClass: undefined,

        initialize: function(){
            _.bindAll(this,'render','appendItem');
            this.initializeCollection();
        },

        initializeCollection: function(){
            if( _.isUndefined(this.collection) || _.isNull(this.collection) ){
                return;
            }
            this.collection.bind('add',this.appendItem);
        },

        render: function(){
            this.addExistingCollectionItems();
            return this;
        },

        addExistingCollectionItems: function(){
            var self = this;
            _(this.collection.models).each(function(argItem){
                self.appendItem(argItem);
            },this);
        },

        appendItem: function(argItem){
            if( _.isUndefined(this.listItemViewClass) || _.isNull(this.listItemViewClass) ){
                return;
            }
            var tmpListItemView = new this.listItemViewClass({
                model: argItem
            });
            $(this.el).append(tmpListItemView.render().el);
        }

    });

    var ListItemView = Backbone.View.extend({

        tagName: 'li',
        model: undefined,

        initialize: function(){
            _.bindAll(this,'render');
        },

        render: function(){
            $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
            return this;
        }

    });

    var MainView = Backbone.View.extend({

        el: $('body'),

        events: {
            'click button#add': 'addItem'
        },

        initialize: function(){
            _.bindAll(this,'render','addItem');
            this.render();
        },

        render: function(){
            $(this.el).append("<button id='add' >Add List Item </button>");
            this.addListView();
        },

        addListView: function(){
            this.itemsCollection = new ItemsCollection();
            var tmpListView = new ListView({
                collection: this.itemsCollection
            });
            tmpListView.listItemViewClass = ListItemView;
            $(this.el).append(tmpListView.render().el);
        },

        addItem: function(){
            var tmpItemIndex = this.itemsCollection.length + 1;
            var tmpItem = new Item();
            tmpItem.set({
                part2: tmpItem.get('part2') + " " + tmpItemIndex
            });
            this.itemsCollection.add(tmpItem);
        }

    });

    var mainView = new MainView();

})(jQuery)
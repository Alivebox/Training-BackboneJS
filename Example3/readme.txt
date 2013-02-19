In this example we will start using models and collections.
Models are simple javascript objects with fields and helper methods.
Collections are a group of a specific model and also has some helper methods.

*----------------------------------------------------------------------------------------------------------------*
var Item = Backbone.Model.extend({
    defaults: {
        part1: 'hello',
        part2: 'world'
    }
});
This is how a model is defined in backbonejs. This is a model with 2 fields: part1 and part2. Also we are setting
default values to those fields
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
var ItemsCollection = Backbone.Collection.extend({
 model: Item
});
This is how a Collection is defined. A collection must have a model associated.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
initializeItemsCollection: function(){
 this.itemsCollection = new ItemsCollection();
 this.itemsCollection.bind('add',this.appendItem);
},
Here we are creating a new instance of the ItemsCollection and also we are adding a listener to the 'add' event
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
addExistingItemsToListView: function(){
    var self = this;
    _(this.itemsCollection.models).each(function(argItem){
        self.appendItem(argItem);
    },this);
}
In case the itemsCollection is not empty, we are looping through its items and adding them to the unordered list
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
addItem: function(){
    this.counter++;
    var tmpItem = new Item();
    tmpItem.set({
        part2: tmpItem.get('part2') + " " + this.counter
    });
    this.itemsCollection.add(tmpItem);
}
When the 'addItem' button is clicked, we are creating a new instance of the 'Item' model, then we set a new value
to the 'part2' field and then we add it to the itemsCollection.
By doing this the itemsCollection will fire the 'add' event that we had bind before to the 'appendItem' in which
the item will be appended to the unordered list.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
appendItem: function(argItem){
    $('ul', this.el).append("<li>" + argItem.get('part1') + " " + argItem.get('part2') + "</li>");
}
The appendItem function was modified to receive an 'Item' as parameter, this item is used to generate the <li> tag.
*----------------------------------------------------------------------------------------------------------------*

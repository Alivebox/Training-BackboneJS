In this example we will separate our main view into 3 views:
 1. ListView: This will be the view that renders the unordered list '<ul>'
 2. ListItemView: This will render a single list item '<li>'.
 3. MainView: This will be the main container that has the 'AddItem' button and the ListView.

*----------------------------------------------------------------------------------------------------------------*
var ListView = Backbone.View.extend({

    tagName: 'ul',
    collection: undefined,
    listItemViewClass: undefined,

This is how we define the ListView component, the 'tagName' field is used to set the main html tag of this view,
so for this view, we can say for example, that we are 'extending' from the html element <ul>.
We added 2 custom fields: collection and listItemViewClass.
Collection will contain the list of items that this list will render.
ListItemViewClass is a reference to the View that we are going to use to generate the <li> items.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
var ListItemView = Backbone.View.extend({

    tagName: 'li',
    model: undefined,

Here we define the ListItemView, in this case the 'tagName' is 'li' as this is the view that will be used to
generate the items of the ListView component.
We added the custom field 'model', here we set an instance of a model that this class will use to generate the
'li' tag
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
addListView: function(){
    this.itemsCollection = new ItemsCollection();
    var tmpListView = new ListView({
        collection: this.itemsCollection
    });
    tmpListView.listItemViewClass = ListItemView;
    $(this.el).append(tmpListView.render().el);
}
Now in the MainView this is how the ListView component is created.
We create a new instance of the ItemsCollection and then a new instance of the ListView component.
Finally we pass the collection and listItemViewClass to the ListView and then we call its render function.
*----------------------------------------------------------------------------------------------------------------*
In this example we are just adding a 'swap' and a 'delete' actions to every li item.
The swap action interchanges the values of fields part1 and part2.
The delete action removes the li item.

*----------------------------------------------------------------------------------------------------------------*
Backbone.sync = function(argMethod,argModel,argSuccessCallback,argErrorCallback){
    argSuccessCallback();
}

Here we overrides persistence storage with dummy function. This enables use of Model.destroy() without raising an error.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
events: {
    'click span.swap':  'swap',
    'click span.delete': 'remove'
}

The ListItemView is now listening for the click of the 2 new actions: swap and remove
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
initialize: function(){
    _.bindAll(this,'render','unrender','swap','remove');
    this.model.bind('change', this.render);
    this.model.bind('remove', this.unrender);
}

In the ListItemView we are now listening for 2 events on the model:
 - change: Everytime the model was changed, we will render again the li item
 - remove: When the model is destroyed we will remove the current li item
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
render: function(){
    $(this.el).html('<span style="color:black;">'+this.model.get('part1')+' '+this.model.get('part2')+'</span>
        <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span>
        <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
    return this;
}

The ListItemView render was updated to include the swap and remove spans
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
unrender: function(){
    $(this.el).remove();
}

ListItemView: Every time the model is destroyed we will remove the li item
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
swap: function(){
  var swapped = {
    part1: this.model.get('part2'),
    part2: this.model.get('part1')
  };
  this.model.set(swapped);
}

swap() will interchange an Item's attributes
When the .set() model function is called, the event change will be triggered
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
remove: function(){
  this.model.destroy();
}

remove(): We use the method destroy() to remove a model from its collection.
When the .remove() model function is called, the event remove will be triggered
*----------------------------------------------------------------------------------------------------------------*

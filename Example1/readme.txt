Here we are creating a simple Backbone View and adding a 'Example 1' label.

*----------------------------------------------------------------------------------------------------------------*
var SimpleView = Backbone.View.extend:
Here we are just extending from Backbone.View in order to create the View.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
el: $('body'),
Here we indicate where we want to render the SimpleView, in this case we will render it in the body of the page.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
initialize: function(){
Function called automatically upon instantiation. Here all bindings should be included except the UI events.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
_.bindAll(this,'render');
Here we use underscore.js to bind all the functions we need to be executed in a specific scope.
In this case we are telling him that we need the render function to be called in the scope of the SimpleView.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
render: function()
Function in charge of rendering the entire view in this.el. Needs to be manually called by the user
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
$(this.el).append("<label>Example 1</label>");
Here we use jquery ($) to get the View el (in this case: the body) and then we use the append function
to add the "Example 1" label.
*----------------------------------------------------------------------------------------------------------------*
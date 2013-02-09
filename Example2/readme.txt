Here we are creating a View that will contains an 'AddItem' button and a unordered list (<ul>).
Every time the 'AddItem' button is clicked, we will add a list item (<li>) to the unordered list.

*----------------------------------------------------------------------------------------------------------------*
events: {
    'click button#add': 'addItem' :
},
Here we map the dom events to functions. In this case we are adding a click event to the 'add' button.
*----------------------------------------------------------------------------------------------------------------*

*----------------------------------------------------------------------------------------------------------------*
$('ul', this.el).append("<li>Hello World Item " + this.counter + "</li>");
Here we use jquery to get the 'ul' and then append a new 'li' to it.
*----------------------------------------------------------------------------------------------------------------*


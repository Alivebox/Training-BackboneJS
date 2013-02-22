define(
    [
        'jquery',
        'underscore',
        'backbone',
        'core/router',
        'views/bottommenubar/BottomMenuBarView'
    ],
    function ($, _, Backbone, Router, BottomMenuBarView) {
        return {

            init: function(){
                Router.init();
                var tmpBottomMenuBarView = new BottomMenuBarView();
                tmpBottomMenuBarView.render();
            }

        };
    }
);
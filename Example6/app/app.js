define(
    [
        'jquery',
        'core/RouterManager',
        'views/bottommenubar/BottomMenuBarView',
        'jqueryMobile'
    ],
    function ($, RouterManager, BottomMenuBarView) {
        return {

            init:function () {
                this.disableJQueryMobileRouting();
                RouterManager.init();
            },

            disableJQueryMobileRouting:function () {
                $.mobile.ajaxEnabled = false;
                $.mobile.linkBindingEnabled = false;
                $.mobile.hashListeningEnabled = false;
                $.mobile.pushStateEnabled = false;
            }

        };
    }
);
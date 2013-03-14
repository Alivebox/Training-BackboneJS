define(
    [
        'jquery',
        'core/RouterManager',
        'jqueryMobile'
    ],
    function ($, RouterManager) {
        return {

            init:function () {
                RouterManager.init();
            }

        };
    }
);
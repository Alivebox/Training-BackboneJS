require.config(
    {

        paths:{
            jquery:'../resources/js/jquery',
            jqueryMobile:'../resources/js/jquery.mobile',
            jqueryMobileConfig: '../resources/js/jqm-config',
            underscore:'../resources/js/lodash',
            backbone:'../resources/js/backbone'
        },

        shim: {
            'backbone': {
                deps: ['underscore','jquery'],
                exports: 'Backbone'
            }
        }

    }
);

require(
    [
        'app',
        'jqueryMobileConfig'
    ],
    function(Application){
        Application.init();
    }
);


require.config(
    {

        paths:{
            jquery:'../resources/js/jquery',
            jqueryMobile:'../resources/js/jquery.mobile',
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
        'app'
    ],
    function(Application){
        Application.init();
    }
);


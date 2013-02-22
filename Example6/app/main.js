require.config(
    {

        paths:{
            jquery:'../resources/js/jquery',
            underscore:'../resources/js/underscore',
            backbone:'../resources/js/backbone'
        },

        shim: {
            'backbone': {
                deps: ['underscore','jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            }
        }

    }
);

require(
    [
        'app'
    ],
    function (argApp) {
        argApp.init();
    }
);

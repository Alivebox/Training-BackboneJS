require.config(
    {

        paths:{
            jquery:'../resources/js/jquery',
            jqueryMobile:'../resources/js/jquery.mobile',
            jqueryMobileConfig: '../resources/js/jqm-config',
            underscore:'../resources/js/lodash',
            backbone:'../resources/js/backbone',
            handlebars: '../resources/js/handlebars'
        },

        shim: {
            'backbone': {
                deps: ['underscore','jquery'],
                exports: 'Backbone'
            },
            'handlebars': {
                exports: 'Handlebars'
            }
        }

    }
);

require(
    [
        'app',
        'jqueryMobileConfig',
        'backbone',
        'handlebars'
    ],
    function(Application){
        Application.init();
        this.testing = true;
    }
);


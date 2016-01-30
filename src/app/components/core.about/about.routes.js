(function() {
   'use strict';

    angular
        .module('app.core.about')
        .config(config);

    config.$inject = ['$stateProvider'];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('core.about', {
                url: '/about',
                views: {
                    'content': {
                        controller: 'AboutCtrl as vm',
                        templateUrl: 'app/components/core.about/about.tpl.html'
                    }
                },
                data: {
                    pageTitle: 'About'
                }
            });
    }
})();
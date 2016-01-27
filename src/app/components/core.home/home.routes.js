(function() {
    'use strict';

    angular
        .module('app.core.home')
        .config(config);

    config.$inject = ['$stateProvider'];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('core.home', {
                url: '/',
                views: {
                    'content': {
                        controller: 'HomeCtrl as vm',
                        templateUrl: 'app/components/core.home/home.tpl.html'
                    }
                },
                data: {
                    pageTitle: 'Home'
                }
            })
    }
})();
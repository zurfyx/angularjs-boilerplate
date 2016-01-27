(function() {
    'use strict';

    angular
        .module('app.core')
        .config(config);

    config.$inject = ['$stateProvider'];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('core', {
                views: {
                    'content' : {
                        controller: 'CoreCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'app/components/core/core.tpl.html'
                    }
                }
            });
    }
})();
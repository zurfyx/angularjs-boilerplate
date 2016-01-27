(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('header', header);

    header.$inject = [];

    /* @ngInject */
    function header() {
        var directive = {
            bindToController: true,
            controller: 'HeaderCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/core/header.tpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

})();


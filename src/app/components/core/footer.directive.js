(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('footer', footer);

    footer.$inject = [];

    /* @ngInject */
    function footer() {
        var directive = {
            bindToController: true,
            controller: 'FooterCtrl',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/core/footer.tpl.html'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();


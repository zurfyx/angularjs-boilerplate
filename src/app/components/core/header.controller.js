(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = [];

    /* @ngInject */
    function HeaderCtrl() {
        var vm = this;
    }

})();


(function() {
   'use strict';

    angular
        .module('app.core.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    /* @ngInject */
    function HomeCtrl() {
        var vm = this;

        vm.greetings = 'Greetings from HomeCtrl!';
    }
})();
'use strict';

describe('HomeCtrl', function() {
    beforeEach(module('ui.router'));
    beforeEach(module('app.core.home'));

    it('should create grettings model with "Greetings from HomeCtrl!"', inject(function($controller) {
        var vm = $controller('HomeCtrl');

        expect(vm.greetings).to.equal("Greetings from HomeCtrl!");
    }));
});
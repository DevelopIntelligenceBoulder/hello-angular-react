(function() {
    'use strict';

    /**
     * Wrapping React Component within Angular Value service.
     */
    angular.module('hello')
        .value('Hello', DI.App.Hello);

})();
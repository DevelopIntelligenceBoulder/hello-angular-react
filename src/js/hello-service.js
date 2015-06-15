(function() {
    'use strict';

    /**
     * Wrapping React Component within Angular Value service.
     */
    angular.module('hello')
        .value('hello', DI.App.Hello);

})();
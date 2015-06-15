(function() {
    'use strict';

    /**
     * Creating DI application namespace.
     * - Will be used to attach React Components
     */
    window.DI = window.DI || {};
    DI.App = DI.App || {};

    /**
     * Creating Hello Angular application
     * - Angular 1.x utilizing React
     */
    angular.module('hello', ['react']);

})();

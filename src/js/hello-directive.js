(function() {
	'use strict';

	/**
	 * Hello directive for displaying Hello World.
	 **/
    angular.module('hello')
      .directive('diHello', diHello);

    function diHello() {
		console.log('hello');
    	//Directive definition object
    	return {
    		restrict: 'E',
    		scope: {
    			place: '@'
    		},
    		template: '<h1>Hello {{place}}</h1>'
    	};

		//Returning our abstracted React component
		//return reactDirective('Hello');
    } 

})();
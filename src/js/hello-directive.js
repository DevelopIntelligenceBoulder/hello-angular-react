(function() {
	'use strict';

	/**
	 * Hello directive for displaying Hello World.
	 **/
    angular.module('hello')
      .directive('diHello', ['reactDirective', 'hello', diHello]);

	/**
	 * The directive function creating our Hello React Component Directive.
	 * @param reactDirective The react directive service via ngReact
	 * @param hello The React Hello Component wrapped as an Angular Value
	 * @returns {*} The React Component as an Angular Directive
	 */
    function diHello(reactDirective, hello) {

		/**
		 * Returning our abstracted React component
		 * @param Name of the component (i.e. DI.App.Hello)
		 * @param Array of property names to pass into the react component (i.e. "place")
		 */
		return reactDirective('hello', ['place']);

    } 

})();
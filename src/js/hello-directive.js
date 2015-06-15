(function() {
	'use strict';

	/**
	 * Hello directive for displaying Hello World.
	 **/
    angular.module('hello')
      .directive('diHello', ['reactDirective', diHello]);

    function diHello(reactDirective) {

		/**
		 * Returning our abstracted React component
		 * @param Name of the component (i.e. DI.App.Hello)
		 * @param Array of property names to pass into the react component (i.e. "place")
		 */
		return reactDirective('DI.App.Hello', ['place']);

    } 

})();
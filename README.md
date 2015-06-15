# hello-angular-react
A simple example of Hello World written in (Angular 1.x)[https://angularjs.org/] and utilizing (React)[https://facebook.github.io/react/].

##What is this?
This example shows how to bring React Components into the Angular Framework architecture.

###Within the js/main.js
An overall application namespace is created to hold JavaScript Objects that are not part of the Angular application. Also, and angular application called "hello" is created.

###Within the js/application-controller.js
A model property `place` has been added to the controller instance via `this`. Why? Controllers in Angular are simply constructors.

###Within the index.html
Example 1 uses a React Component is utilized directly within the HTML.

Example 2 uses an Angular Directive to abstract away React Components being directly placed with HTML.

###Within the component/hello.js
The React Hello Component that contains the transformed JSX from jsx/hello.js. The component expects a `place` property as a string to be passed into it or warnings will be thrown. This is a completely separate React Component that will be wrapped via Angular.

###Within the js/hello-service.js
An Angular Value Service that wraps the React Hello Component and brings it within the Angular eco-system. Allows the Hello Component to be dependency injected into the application. The service is utilized in the Example 1 React Component `name` property. It is also dependency injected within the diHello directive.
 
###Within the js/hello-directive.js
An Angular Directive that utilizes a React Component. This directive has an Angular Value Service wrapped React Component dependency injected into it (i.e. `hello`). Also, a reactDirective service is utilized via [ngReact](https://github.com/davidchang/ngReact) is utilized to build the Angular Directive Definition Object for the directive. 

##Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Angular, React, ngReact and Express)
    * The Node/Express Web Server will start
4. Go to `http://localhost:8080/src` in your web browser

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on Angular](http://www.developintelligence.com/catalog/web-development-training/angularjs). Check out [Advanced AngularJS](http://www.developintelligence.com/catalog/web-development-training/angularjs/advanced-angularjs-development) or the [AngularJS Boot Camp](http://www.developintelligence.com/catalog/web-development-training/angularjs/angularjs-boot-camp) to get your team up to speed.
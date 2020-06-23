# UiTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Developer Documentation

# uitest

 Installation instructions ->
  1)  Clone the repository or download zip from github.
  2)  Navigate to the project folder and then run npm install for installing the dev dependencies.
  3)  Run ng serve to run the application.
  
Description of how the application work ->
 Landing page contains a dropdown to select region. Once region is selected countries corresponding to the region are loaded, are set into the ngrx store and second dropdown     (country) appears with the list of countries.
 If the country dropdown data is already loaded from the server and set into the store, it retrieves the list from store.
 After selecting country and clicking on load country button, required country details appear (this is a component of a lazy loaded module).
 
 Testing->
 Unit test cases have been written for all components and store with test coverage of 85.9%
 
 If more time would have been provided -
 1) Test coverage could have been gone upto 100%.
 2) Region dropdown could have dynamic data instead of static.
 3) Multi select could have been added in countries, and correspondingly multiple tables of data for each country on detail page.
  
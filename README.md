# Shopping Cart Page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

This is a simple product review app built with Angular. Users can view a list of products, select a product to view its details, and add reviews to a product.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `ng serve`.
4. Navigate to `http://localhost:4200/` to view the app.

## Using json-server

This app uses `json-server` to provide a RESTful API for the product data. `json-server` is a simple and lightweight tool that allows you to create a fake RESTful API by serving data from a JSON file.

To start the `json-server`, follow these steps:

1. Install `json-server` globally by running `npm install -g json-server`.
2. Start the `json-server` by running `json-server --watch db.json`.
3. The `json-server` will start at `http://localhost:9000`.

## Features

This app includes the following features:

- View a list of products
- Select a product to view its details
- Add reviews to a product
- Display product images using Slick Carousel
- Use data binding to display product details and reviews in the UI

## Services

This app uses the following services:

- `ProductService`: Provides methods for fetching and updating product data from the server.

## Modules

This app uses the following modules:

- `HttpClientModule`: Provides the `HttpClient` service for making HTTP requests to the server.
- `SlickCarouselModule`: Provides the `ngx-slick-carousel` component for displaying product images in a carousel.

## Angular Version

This app was built with Angular version 16.0.0.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## License

This app is licensed under the MIT License. See the `LICENSE` file for more information.
# SpotiyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Instrucciones Detalladas
1) Instalar las dependencias ejecutar "npm i" sobre el directorio raiz, luego "ng serve".
2) Tener una cuenta de Spotify - ir a https://beta.developer.spotify.com/dashboard/ iniciar sesión y crear una aplicación en Spotify. 
3) Dentro de la aplicación clic en Edit Settings y agregar las direcciones de callback 
http://localhost:4200/callback 
http://localhost:4200/ 
3) Copiar Client ID y Client Secret y pegar en el archivo src/environments/environment.ts 
4) Spotify solo acepta peticiones de autentificación desde un servidor, con fines de prueba se hace desde el cliente, para que no se rechace esta petición installar el pluggin "CORS Toogle" desde la tienda de chrome. 
5) Listo deberiamos ver en pantalla la opción para buscar.
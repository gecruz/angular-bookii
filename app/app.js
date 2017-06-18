import { Router } from './router.js'
import { HomeController } from './components/home/home.controller.js'
import { BooksService } from './services/books.service.js'
import ShoppingCart from './directives/shoppingCart/shoppingCart.directive.js'

const app = angular.module('App', [
  'ui.router',
  'ngMaterial'
])

app.config(($mdThemingProvider) => {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
})

Router.configure(app)

app
  .controller('HomeController', HomeController)
  .service('BooksService', BooksService)
  .directive('shoppingCart', () => new ShoppingCart())

app.constant('API', '/api')
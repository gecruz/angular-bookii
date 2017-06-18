import { Router } from './router.js'
import { HomeController } from './components/home/home.controller.js'
import { ShoppingCartController } from './components/shoppingCart/shoppingCart.controller.js'
import { BooksService } from './services/books.service.js'
import ShoppingCartDirective from './directives/shoppingCartDirective/shoppingCartDirective.directive.js'

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
  .controller('ShoppingCartController', ShoppingCartController)
  .service('BooksService', BooksService)
  .directive('shoppingCart', () => new ShoppingCartDirective())

app.constant('API', '/api')

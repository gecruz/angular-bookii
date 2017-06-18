import { Router } from './router.js'
import { HomeController } from './components/home/home.controller.js'
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
  .directive('shoppingCart', () => new ShoppingCart())

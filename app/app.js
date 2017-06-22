import Router from './router.js'
import ToolbarController from './shared/toolbar/toolbar.controller.js'
import HomeController from './components/home/home.controller.js'
import ShoppingCartController from './components/shoppingCart/shoppingCart.controller.js'
import BottomSheetController from './shared/bottom-sheet/bottomSheet.controller.js'
import BooksService from './services/books.service.js'
import PromocodesService from './services/promocodes.service.js'
import ShoppingCartDirective from './directives/shoppingCartDirective/shoppingCartDirective.directive.js'

const app = angular.module('App', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial'
])

app.config(($mdThemingProvider) => {
  'ngInject'

  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue')
})

Router.configure(app)

app
  .controller('ToolbarController', ToolbarController)
  .controller('HomeController', HomeController)
  .controller('ShoppingCartController', ShoppingCartController)
  .controller('BottomSheetController', BottomSheetController)
  .service('BooksService', BooksService)
  .service('PromocodesService', PromocodesService)
  .directive('shoppingCart', () => new ShoppingCartDirective())

app.constant('API', '/api')

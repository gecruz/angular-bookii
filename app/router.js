class Router {
  static configure (app) {
    app.config(($stateProvider, $urlRouterProvider) => {

      $urlRouterProvider.otherwise('/home')

      $stateProvider
        .state('app', {
          abstract: true,
          url: '',
          templateUrl: 'shared/toolbar/toolbar.view.html'
        // controller: 'ToolbarController as ctrl' *future logout logic goes here*
        })
        .state('app.home', {
          url: '/home',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        })
        .state('app.shoppingCart', {
          url: '/shoppingCart',
          templateUrl: 'components/shoppingCart/shoppingCart.view.html',
          controller: 'ShoppingCartController as ctrl'
        })
    })
  }
}
export { Router }

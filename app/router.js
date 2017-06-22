export default class Router {
  static configure (app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      'ngInject'

      $urlRouterProvider.otherwise('/home')

      $stateProvider

        .state('signin', {
          url: '/signin',
          templateUrl: 'components/signin/signin.view.html',
          controller: 'SigninController as ctrl'
        })

        .state('app', {
          abstract: true,
          url: '',
          templateUrl: 'shared/toolbar/toolbar.template.html',
          controller: 'ToolbarController as ctrl'
        })
        .state('app.home', {
          url: '/home',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        })
        .state('app.shoppingCart', {
          url: '/shoppingCart',
          templateUrl: 'components/shoppingCart/shoppingCart.view.html',
          controller: 'ShoppingCartController as ctrl',
          params: {
            books: null
          }
        })
    })
  }
}

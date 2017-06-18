import './shoppingCartDirective.view.html'

export default class ShoppingCart {
  constructor () {
    this.templateUrl = require('./shoppingCartDirective.view.html')
    this.restrict = 'E'
    this.scope = {}
    this.controller = ShoppingCartController
    this.controllerAs = 'ctrl'
    this.bindToController = true
  }
  compile () {}
  link (scope, elm, attrs, ngModelController) {}
}

class ShoppingCartController {
  constructor ($scope, $state) {
    this._$scope = $scope
    this._$state = $state
  }
  openCart () {
    this._$state.go("app.shoppingCart")
  }
  setTitle () {
    this.title = 'Shopping Cart'
  }
}

ShoppingCartController.$inject = ['$scope', '$state']

import './shoppingCartDirective.view.html'

class ShoppingCartController {
  constructor ($scope, $state) {
    'ngInject'
    this._$scope = $scope
    this._$state = $state

    console.log(this._$scope)

    this._$scope.options = {
      books: []
    }
  }

  updateOptions () {
    let scope = this._$scope
    let keys = Object.keys(scope.options)
    keys.forEach(key => {
      scope.options[key] = this[key] || scope.options[key]
    })
  }

  openCart () {
    this._$state.go('app.shoppingCart')
  }

  setTitle () {
    this.title = 'Shopping Cart'
  }
}

class ShoppingCartDirective {
  constructor () {
    this.templateUrl = 'directives/shoppingCartDirective/shoppingCartDirective.view.html'
    this.restrict = 'E'
    this.controllerAs = 'ctrl'
    this.controller = ShoppingCartController
    this.bindToController = true
    this.scope = {
      books: '='
    }
  }

  link ($scope, $element, $attr, $ctrl) {
    $ctrl.updateOptions()
  }

}

ShoppingCartController.$inject = ['$scope', '$state']
export { ShoppingCartDirective }

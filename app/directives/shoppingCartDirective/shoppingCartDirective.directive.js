import './shoppingCartDirective.view.html'

export default class ShoppingCartDirective {
  constructor () {
    this.templateUrl = 'directives/shoppingCartDirective/shoppingCartDirective.view.html'
    this.restrict = 'E'
    this.scope = { books: '=' }
  }

  compile (tElement, done) {
    tElement.css('position', 'relative')
  }

  link (scope, element, attributes) {
    this.books = scope.books
  }

}

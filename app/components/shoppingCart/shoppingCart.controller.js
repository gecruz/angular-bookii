import './shoppingCart.view.html'

class ShoppingCartController {
  constructor (BooksService, $mdToast, $state) {
    this._BooksService = BooksService
    this._$mdToast = $mdToast
    this._$state = $state
    this.books = []
  }

  init () {
    this.filterAllBooksByShoppingCart(this._$state.params.books)
  }

  remove (index, list) {
    list.splice(index, 1)
  }

  filterAllBooksByShoppingCart (books) {
    this._BooksService
      .getAllBooks()
      .then(res => {
        if (res.data) {
          books.map(book => {
            this.books.push(res.data.filter(data => data.id === book)[0])
          })
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

}

ShoppingCartController.$inject = ['BooksService', '$mdToast', '$state']
export { ShoppingCartController }

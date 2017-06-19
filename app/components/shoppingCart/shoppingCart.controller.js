import './shoppingCart.view.html'

class ShoppingCartController {
  constructor (BooksService, $mdToast, $state, PromocodesService) {
    this._BooksService = BooksService
    this._PromocodesService = PromocodesService
    this._$mdToast = $mdToast
    this._$state = $state
    this.books = []
  }
  init () {
    if (this._$state.params.books) {
      this.filterAllBooksByShoppingCart(this._$state.params.books)
    } else {
      this._$state.go('app.home')
      this._$mdToast.show(this._$mdToast.simple().textContent("You don't have any item at your cart :("))
    }
  }
  remove (index, list) {
    list.splice(index, 1)
  }
  validatePromocode (code) {
    this._PromocodesService
      .getPromocode(code)
      .then(res => {
        if (res.quantity > 0) {
          this.promocode = res
          this._$mdToast.show(this._$mdToast.simple().textContent('Promocode found! :)'))
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Promocode not found :('))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
  filterAllBooksByShoppingCart (books) {
    this._BooksService
      .getAllBooks()
      .then(res => {
        if (res.data) {
          books.map(book => {
            let filteredData = res.data.filter(data => data.id === book.id)[0]
            // init quantity
            filteredData.cartQuantity = 1
            this.books.push(filteredData)
            this.updateTotal()
          })
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
  updateTotal () {
    if (this.books) {
      this.total = this.books.reduce((total, book) => total + (book.price * book.cartQuantity), 0)
    } else {
      this.total = 0
    }
  }

}

ShoppingCartController.$inject = ['BooksService', '$mdToast', '$state', 'PromocodesService']
export { ShoppingCartController }

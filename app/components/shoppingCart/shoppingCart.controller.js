import './shoppingCart.view.html'

export class ShoppingCartController {
  constructor (BooksService, $mdToast, $state, PromocodesService) {
    'ngInject'

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
      this._$mdToast.show(this._$mdToast.simple().textContent("You don't have any book at your cart :("))
    }
  }

  remove (index, list) {
    list.splice(index, 1)
    this.updateTotal()
  }

  validatePromocode (code) {
    this._PromocodesService
      .getPromocode(code)
      .then(res => {
        if (res) {
          if (res.quantity > 0) {
            this.promocode = res
            this.updateTotal()
            this._$mdToast.show(this._$mdToast.simple().textContent('Promocode found! :)'))
          } else {
            this._$mdToast.show(this._$mdToast.simple().textContent('Promocode not found :('))
          }
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
      this.total = this.books.reduce((total, book) => total + (book.price * book.cartQuantity || 0), 0)

      if (this.promocode) {
        let promotionalBooks = this.books.filter(book => book.author === this.promocode.author)
        let discount = promotionalBooks.reduce((total, book) => total - (book.price * book.cartQuantity * this.promocode.percentage / 100), 0)
        this.total += discount
      }
    } else {
      this.total = 0
    }
  }

}

import './home.view.html'
import './quantity.dialog.html'

class HomeController {
  constructor (BooksService, $mdToast, $mdDialog) {
    this._BooksService = BooksService
    this._$mdToast = $mdToast
    this._$mdDialog = $mdDialog
    // mock
    this.shoppingCartBooks = [1, 2]
  }

  init () {
    this.getAllBooks()
    this.getBookPreview()
  }

  getBookPreview () {
    this._BooksService
      .getBookPreview()
      .then(res => {
        this.bookPreview = res.data
      })
      .catch(err => {
        console.error(err)
      })
  }

  getAllBooks () {
    this._BooksService
      .getAllBooks()
      .then(res => {
        if (res.data) {
          this.books = res.data
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  getBookById (id) {
    this._BooksService
      .getBookById(id)
      .then(res => {
        if (res.data) {
          this.book = res.data
          console.log(this.book)
        } else {
          this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  openQuantityDialog (event, book) {
    this.book = book
    this.alert = this._$mdDialog.show({
      templateUrl: require('./quantity.dialog.html'),
      clickOutsideToClose: true,
      controller: () => this,
      controllerAs: 'ctrl',
      fullscreen: true,
      targetEvent: event
    })
  }

  closeQuantityDialog () {
    this.book = null
    this._$mdDialog.hide()
  }

  addToCart (book, cart) {}

  removeFromCart (book, cart) {}

  remove (index, list) {
    list.splice(index, 1)
  }

  exists (item, list) {
    return list.includes(parseInt(item))
  }

  toggle (item, list) {
    let idx = list.indexOf(parseInt(item))
    if (idx > -1) {
      list.splice(idx, 1)
    } else {
      list.push(parseInt(item))
    }
  }

}

HomeController.$inject = ['BooksService', '$mdToast', '$mdDialog']
export { HomeController }

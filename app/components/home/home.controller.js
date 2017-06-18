import './home.view.html'
import '../../images/logo.png'

class HomeController {
  constructor (BooksService, $mdToast) {
    this._BooksService = BooksService
    this._$mdToast = $mdToast
  }
  init () {
    this.getAllBooks()
  }
  getAllBooks () {
    this._BooksService
      .getAllBooks()
      .then(res => {
        if (res.data) {
          this.books = res.data
          console.log(this.books)
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

}

HomeController.$inject = ['BooksService', '$mdToast']
export { HomeController }

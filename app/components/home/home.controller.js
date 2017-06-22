import './home.view.html'
import './showBook.dialog.html'
import '../../shared/bottom-sheet/bottom-sheet.template.html'

export default class HomeController {
  constructor (BooksService, $mdToast, $mdDialog, $mdBottomSheet) {
    'ngInject'

    this._BooksService = BooksService
    this._$mdToast = $mdToast
    this._$mdDialog = $mdDialog
    this._$mdBottomSheet = $mdBottomSheet

    this.shoppingCartBooks = []
  }

  showBottomSheet () {
    this._$mdBottomSheet.show({
      templateUrl: require('../../shared/bottom-sheet/bottom-sheet.template.html'),
      controller: 'BottomSheetController as ctrl',
      clickOutsideToClose: true
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }

  listItemClick (index) {
    var clickedItem = this.items[index]
    this._$mdBottomSheet.hide(clickedItem)
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

  showBookDialog (event, book) {
    this.book = book
    this.alert = this._$mdDialog.show({
      templateUrl: require('./showBook.dialog.html'),
      clickOutsideToClose: true,
      controller: () => this,
      controllerAs: 'ctrl',
      fullscreen: true,
      targetEvent: event
    })
  }

  closeBookDialog () {
    this.book = null
    this._$mdDialog.hide()
  }

  exists (item, list) {
    return list.includes(item)
  }

  toggle (item, list) {
    let idx = list.indexOf(item)
    if (idx > -1) {
      list.splice(idx, 1)
    } else {
      list.push(item)
    }
  }

}

import './toolbar.view.html'

class ToolbarController {
  constructor ($mdToast) {
    this._$mdToast = $mdToast
  }

  logout () {
    // future logout goes here
  }

}

ToolbarController.$inject = ['$mdToast']
export { ToolbarController }

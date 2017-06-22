import './toolbar.template.html'

export default class ToolbarController {
  constructor ($state, $mdToast) {
    'ngInject'

    this._$state = $state
    this._$mdToast = $mdToast
  }

  logout () {
    this._$state.go('signin')
  }

}

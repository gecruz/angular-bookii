import './signin.view.html'

export class SigninController {
  constructor ($state, $mdToast) {
    'ngInject'

    this._$state = $state
    this._$mdToast = $mdToast
  }

  signin () {
    this._$state.go('app.home')
  }

}

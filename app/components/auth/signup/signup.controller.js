import './signup.view.html'

export class SignupController {
  constructor ($state, $mdToast) {
    'ngInject'

    this._$state = $state
    this._$mdToast = $mdToast
  }

  signup () {
    this._$state.go('app.home')
  }

}

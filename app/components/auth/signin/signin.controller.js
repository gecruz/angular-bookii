import './signin.view.html'

export default class SigninController {
  constructor ($state, $mdToast) {
    'ngInject'

    this._$state = $state
    this._$mdToast = $mdToast
  }

  signin (user) {
    this._$state.go('app.home')

  // future signin logic goes here
  // this._UserService
  //   .signin(user)
  //   .then(res => {
  //     if (res.data) {
  //       this.setUser(res.data)
  //       this._$state.go('app.home')
  //     } else {
  //       this._$mdToast.show(this._$mdToast.simple().textContent('Something went wrong'))
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  }

  setUser (user) {
    //
  }

}

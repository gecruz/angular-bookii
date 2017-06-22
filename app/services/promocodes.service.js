export default class PromocodesService {
  constructor ($http, $q, API) {
    'ngInject'

    this._$http = $http
    this._$q = $q
    this.API = API
  }

  // getPromocode (code) {
  //   return this._$http.get(`${this.API}/promocodes/${code}`)
  // }

  getPromocode (code) {
    return this._$q.when(
      this.getAllPromocodes().then(promocodes => {
        return promocodes.data.filter(_promocode => _promocode.code === code)[0]
      })
    )
  }

  getAllPromocodes () {
    return this._$q.resolve({
      data: [{
        id: 1,
        code: '11111',
        author: 'Martin FowIer',
        percentage: 10,
        quantity: 12
      }, {
        id: 2,
        code: '22222',
        author: 'Frederick P. Brooks',
        percentage: 5,
        quantity: 0
      }, {
        id: 3,
        code: '33333',
        author: 'Aurelio Marinho Jargas',
        percentage: 20,
        quantity: 13
      }]
    })
  }

}

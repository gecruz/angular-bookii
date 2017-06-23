import './bottom-sheet.template.html'

export default class BottomSheetController {
  constructor ($mdBottomSheet) {
    'ngInject'

    this._$mdBottomSheet = $mdBottomSheet

    this.items = [
      { name: 'Person', icon: 'person', color: 'md-accent' },
      { name: 'Mail', icon: 'mail', color: 'md-accent' },
      { name: 'Message', icon: 'message', color: 'md-accent' }
    ]
  }

  showBottomSheet () {
    this._$mdBottomSheet.show({
      templateUrl: require('./bottom-sheet.template.html'),
      controller: () => this,
      clickOutsideToClose: false
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

}

class BooksService {
  constructor ($http, $q, API) {
    this._$http = $http
    this._$q = $q
    this.API = API
  }

  // getBookById (bookId) {
  //   return this._$http.get(`${this.API}/books/${bookId}`)
  // }

  // getAllBooks () {
  //   return this._$http.get(`${this.API}/books`)
  // }

  getBookPreview () {
    return this._$q.resolve({
      data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id quaerat illo non recusandae quo consectetur vitae tempora voluptatem qui laborum consequuntur corporis dolorem similique aperiam, totam? Et facere, eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat delectus similique molestias quae voluptatibus ea maiores nemo hic dolor in porro quo dolorem dolore, earum, vel dolorum. Impedit, ipsam, quis.'
    })
  }

  getBookById (bookId) {
    return this._$q.when(
      this.getAllBooks().then(books => {
        return { data: books.data.filter(_book => _book.id === bookId) }
      })
    )
  }

  getAllBooks () {
    return this._$q.resolve({
      data: [{
        id: 1,
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andrew Hunt & Dave Thomas',
        price: 40.00,
        quantity: 12
      }, {
        id: 2,
        title: 'The Mythical Man-Month: Essays on Software Engineering',
        author: 'Frederick P. Brooks',
        price: 80.00,
        quantity: 1
      }, {
        id: 3,
        title: 'Expressões Regulares - Uma Abordagem Divertida',
        author: 'Aurelio Marinho Jargas	',
        price: 20.00,
        quantity: 13
      }, {
        id: 4,
        title: 'Domain Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        price: 120.00,
        quantity: 42
      }, {
        id: 5,
        title: 'Patterns of Enterprise Application Architecture',
        author: 'Martin FowIer',
        price: 32.00,
        quantity: 42
      }, {
        id: 6,
        title: 'Epigrams in Programming',
        author: 'Alan Perils',
        price: 31.00,
        quantity: 0
      }, {
        id: 7,
        title: 'Implementing Domain-Driven Design',
        author: 'Vaughn Vernon',
        price: 31.00,
        quantity: 42
      }, {
        id: 8,
        title: 'Dive Into HTML5',
        author: 'Mark Pilgrim',
        price: 22.00,
        quantity: 42
      }, {
        id: 9,
        title: 'Scalable Internet Architectures',
        author: 'Theo Schlossnagle',
        price: 18.00,
        quantity: 4
      }, {
        id: 10,
        title: 'Refactoring: Improving the Design of Existing Code',
        author: 'Martin Fowler',
        price: 33.00,
        quantity: 2
      }, {
        id: 11,
        title: 'Treinamento Em C',
        author: 'Victorine Viviane Mizrahi',
        price: 42.00,
        quantity: 6
      }, {
        id: 12,
        title: 'Algoritmos: Teoria e Prática',
        author: 'Thomas H. Cormen',
        price: 4.60,
        quantity: 1
      }]
    })
  }
}

BooksService.$inject = ['$http', '$q', 'API']
export { BooksService }

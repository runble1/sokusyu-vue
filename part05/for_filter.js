new Vue({
  el: '#app',
  data: {
    books: [
      {
        isbn: '978-4-7981-5382-7',
        title: '独習C# 新板',
        price: 3600
      },
      {
        isbn: '978-4-7981-5382-7',
        title: '適当',
        price: 1100
      }
    ]
  },
  computed: {
    cheapBooks: function() {
      return this.books.filter(function(b) {
        return b.price < 2500
      })
    }
  }
})
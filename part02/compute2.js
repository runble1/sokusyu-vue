new Vue({
  el: '#app',
  data: {
    email: 'Yamada@example.com'
  },
  methods: {
    localEmail: function (){
      return this.email.split('@')[0].toLowerCase()
    }
  }
})
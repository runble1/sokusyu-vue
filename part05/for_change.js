new Vue({
  el: '#app',
  data: {
    list: ['melon', 'orange', 'peach']
  },
  methods: {
    // ボタンクリック時に2番めの要素を変更
    onclick: function() {
      Vue.set(this.list, 1, 'strawberry')
    }
  }
})
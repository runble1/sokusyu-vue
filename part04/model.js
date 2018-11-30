new Vue({
  el: '#app',
  data: {
    myName: 'ゲスト'
  },
  methods: {
    onclick: function(e) {
      window.alert(
        '右クリックした座標：'　+ e.clientX + ',' + e.clientY)
    }
  }
})
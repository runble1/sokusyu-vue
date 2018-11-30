new Vue({
  el: '#app',
  data: {
    current: new Date().toLocaleString()
  },
  computed: {
    // 算出プロパティ計算、初回のみ
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      this.current = new Date().toLocaleString()
    },
    randomm: function() {
      return Math.random()
    }
  },
})
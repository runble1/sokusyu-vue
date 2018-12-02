Vue.component('my-counter', {
  props: ['init'],
  template: '<div>現在地は{{ current }}です' + '<input type="button" v-on:click="onclick" value="増加" /></div>',
  data: function() {
    return {
      current: this.init
    }
  },
  methods: {
    onclick: function() {
      this.current++;
    }
  }
})
new Vue({
  el: '#app',
})
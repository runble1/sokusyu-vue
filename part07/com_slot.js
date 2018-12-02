Vue.component('my-hello', {
  props: ['yourName'],
  template: '<div>こんにちは、<slot>ごん兵衛</slot>さん！</slot></div>',
})
new Vue({
  el: '#app',
})
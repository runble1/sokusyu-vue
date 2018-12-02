Vue.component('my-hello', {
  // 1.プロパティを定義
  props: ['yourName'],
  template: '<div>こんにちは、{{ yourName }}さん！</div>'
})
new Vue({
  el: '#app',
})
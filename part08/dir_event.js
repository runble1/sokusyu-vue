Vue.directive('highlight', {
  bind: (el, binding) => {
    el.addEventListener('mouseenter', function() {
      this.style.backgroundColor = binding.value
    }, false)
    el.addEventListener('mouseleave', function() {
      this.style.backgroundColor = ''
    }, false)
  }
})
new Vue({
  el: '#app',
  data: {
    color: 'Yellow'
  }
})
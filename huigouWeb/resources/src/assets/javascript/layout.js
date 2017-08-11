/**
 * Created by banYing on 2017/6/9.
 */
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.use({
  install: function (Vue, options) {
    Vue.prototype.$ajax_get = function (url, params, fn) {
      this.$http.get(url, {
        params: params
      }).then(function (response) {
        fn && fn.call(this, response.data.result, 'success', response)
      }, function (response) {
        fn && fn.call(this, response.data.result, 'fail', response)
      })
    }
    Vue.prototype.$count_down = function (endTime) {
      var end = new Date(endTime * 1000)
      var start = new Date()
      var time = end - start
      var day = parseInt(time / 1000 / 60 / 60 / 24)
      var hour = parseInt(time / 1000 / 60 / 60 % 24)
      var minute = parseInt(time / 1000 / 60 % 60)
      var dh = day * 24 + hour
      var $dh = dh.toString().length > 1 ? dh : '0' + dh
      var $minute = minute.toString().length > 1 ? minute : '0' + minute
      var getTime = $dh + ':' + $minute
      return getTime
    }
  }
})

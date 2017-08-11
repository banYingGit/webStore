/**
 * Created by banYing on 2017/8/10 0010.
 */
var hi = {
  data: function () {
    return {}
  },
  filters: {
    aa: function (val) {
      return val + '>>>>'
    }
  },
  mounted: function () {
    console.log('this mixin!')
  }
}
export {hi}

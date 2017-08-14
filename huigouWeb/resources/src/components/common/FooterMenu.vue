<template>
  <div class="footer-menu">
    <mt-tabbar v-model="selected">
     <mt-tab-item id="1">
        夺宝
      </mt-tab-item>
      <mt-tab-item id="2">
        全部商品
      </mt-tab-item>
      <mt-tab-item id="3">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default{
    name: 'footerMenu',
    data: function () {
      return {
        selected: ''
      }
    },
    created: function () {
      this.selected = this.footerData.menu
    },
    watch: {
      selected: function (val, oldVal) {
        if (val === '1') {
          this.$router.push({path: '/'})
        }
        if (val === '2') {
          this.$router.push({path: '/goodsList.html'})
        }
        if (val === '3') {
          this.$router.push({path: '/user.html'})
        }
      }
    },
    props: ['footerData']
  }
</script>

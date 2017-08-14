<template>
  <div>
    <div class="user">

      个人中心
    </div>
    <footer-menu :footerData="footerData"></footer-menu>
  </div>
</template>

<script>
  import FooterMenu from '@/components/common/FooterMenu'

  export default {
    name: 'Index',
    data: function () {
      return {
        footerData: {
          menu: '3'
        }
      }
    },
    components: {
      FooterMenu: FooterMenu
    }
  }
</script>

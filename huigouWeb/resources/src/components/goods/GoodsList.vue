<template>
  <div>
    <header-top :headerData="headerData"></header-top>
    <footer-menu :footerData="footerData"></footer-menu>
  </div>
</template>

<script>
  import HeaderTop from '@/components/common/HeaderTop'
  import FooterMenu from '@/components/common/FooterMenu'

  export default {
    name: 'Index',
    data: function () {
      return {
        headerData: {
          title: '全部商品',
          goBackTop: true,
          goLink: false
        },
        footerData: {
          menu: '2'
        }
      }
    },
    components: {
      HeaderTop: HeaderTop,
      FooterMenu: FooterMenu
    }
  }
</script>

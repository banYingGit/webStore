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
          title: '一元会购',
          goBackTop: false,
          goLink: true,
          path: '/'
        },
        footerData: {
          menu: '1'
        }
      }
    },
    mounted: function () {
      console.log('this resURl!', this.src)
    },
    components: {
      HeaderTop: HeaderTop,
      FooterMenu: FooterMenu
    }
  }
</script>

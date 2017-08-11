<template>
  <div class="hello">

    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '小桥流水人家'
      }
    },
    methods: {
      handleClick: function () {
        this.$toast('Hello world!')
      }
    }
  }
</script>

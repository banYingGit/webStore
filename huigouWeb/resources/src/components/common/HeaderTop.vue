<template>
  <div>
    <div class="header-top" v-bind:class="{white:headerData.color}">
      <div class="left-icon" v-if="headerData.goBackTop" onclick="window.history.go(-1)">返回</div>
      <h1>{{headerData.title}}</h1>
      <div class="right-icon" v-if="headerData.goLink">
        <router-link :to="headerData.path">？</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'headerTop',
    data: function () {
      return {}
    },
    props: ['headerData']
  }
</script>

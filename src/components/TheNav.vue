<template>
  <div class="nav">
    <router-link to="/" class="logo">HOME</router-link>
    <div class="menu">
      <router-link to="/login" class="item login active">LOGIN</router-link>
      <router-link to="/register"  class="item register">REGISTER</router-link>
      <router-link to="/login" v-if="!hasToken" class="item logout">LOGOUT</router-link>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
export default {
  name: 'TheNav',
  methods: {
    hasToken(){
      const token = window.localStorage.getItem('jwt');
      console.log( token );
      return !token || token !== null ;
    }
  },
  mounted() {
    $(".menu .item").click( function(){
      $(".menu .item").removeClass("active");
      $(this).addClass("active")
    })
  }
}
</script>

<style scoped>

</style>

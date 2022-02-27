<template>
  <form class="form" method="post" action="#">
    <div class="item title">LOGIN NOW</div>
    <input class="item input" type="email" name="email" placeholder="Enter Email" required>
    <input class="item input" type="text" name="password" placeholder="Enter Password" required>
    <input class="item input button" type="submit" value="LOGIN">
    <router-link class="item register" to="/register">
      <span class="account">Don't Have Account ?</span>
      <span class="link">Register</span>
    </router-link>
  </form>
</template>

<script>
  import $ from 'jquery';
export default {

  name: 'TheLogin',
  mounted() {
    $(".form .register").click( function() {
      $(".menu .item").removeClass("active");
      $(".menu .register").addClass("active")
    })
  }
}
</script>

<style scoped>

</style>

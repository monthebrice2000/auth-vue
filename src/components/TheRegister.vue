<template>
  <form class="form" method="post" action="#">
    <div class="item title">REGISTER NOW</div>
    <input class="item input" type="email" name="email" placeholder="Enter Email" required>
    <input class="item input" type="text" name="password" placeholder="Enter Password" required>
    <input class="item input button" type="submit" value="LOGIN">
    <router-link class="item register" to="/login">
      <span class="account">Have Account ?</span>
      <span class="link">Login</span>
    </router-link>
  </form>
</template>

<script>
export default {
  name: 'TheNav',
}
</script>

<style scoped>

</style>

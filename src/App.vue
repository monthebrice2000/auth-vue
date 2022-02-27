<template>
  <div class="main">
    <TheNav/>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

import TheNav from "@/components/TheNav";
export default {
  name: 'App',
  components: {TheNav},
}
</script>

<style>

</style>

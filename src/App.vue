<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar'
import footer from '@/components/Layouts/footer'
export default {
  name: 'App',
  components:{
    Navbar,
    footer
  }
}
</script>

<style>

</style>

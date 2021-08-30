<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Nav />
  </div>
</template>

<script>
import Nav from '../src/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<template>
  <div class="head">
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.head {
  height: 70px;
  width: 100%;
  background-color: #ff65af;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  > div {
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 70px;
  }
}
</style>
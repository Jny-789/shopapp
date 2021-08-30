<template>
  <div>
    <el-page-header @back="goBack" content="我的订单">
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.el-page-header {
  height: 50px;
  line-height: 50px;
}
</style>

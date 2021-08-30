<template>
  <div>
    <div class="user">
      <el-avatar class="el-icon-user-solid" size="large"></el-avatar>
      <span>{{this.$store.state.user.name}}</span>
    </div>
    <div class="pd-body">
      <router-link to="/orders" tag="div">
        <i class="el-icon-s-order"></i>
        <div>我的订单</div>
      </router-link>
      <div>
        <i class="el-icon-chat-line-square"></i>
        <div>待评价</div>
      </div>
      <div>
        <i class="el-icon-coin"></i>
        <div>退款/售后</div>
      </div>
      <div>
        <i class="el-icon-star-on"></i>
        <div>我的收藏</div>
      </div>
      <div>
        <i class="el-icon-coordinate"></i>
        <div>地址</div>
      </div>
      <div>
        <i class="el-icon-more"></i>
        <div>账号管理</div>
      </div>
    </div>
    <el-popconfirm title="确定退出登录吗？" hide-icon @confirm="exit">
      <el-button class="exit-btn" slot="reference">退出登录</el-button>
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  name: "ProfileData",
  methods: {
    exit() {
      this.$store.commit('changeLogin', false)
    }
  }
}
</script>

<style lang="scss">
.user {
  padding: 30px;
  .el-icon-user-solid {
    font-size: 30px;
  }
  span {
    font-size: 20px;
    margin-left: 20px;
    vertical-align: middle;
  }
}
.pd-body {
  display: grid;
  padding: 30px;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-row-gap: 20px;
  > div {
    font-size: 20px;
    text-align: center;
    padding: 10px 0;
    > i {
      color: #ff65af;
      font-size: 30px;
    }
  }
}
.exit-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  font-size: 20px;
  padding: 20px 50px;
}
</style>

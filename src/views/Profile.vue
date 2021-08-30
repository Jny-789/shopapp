<template>
  <div class="box">
    <Head title="个人中心" />
    <div class="empty" v-if="!this.$store.state.isLogin">
      <el-empty description="暂无数据"></el-empty>
      <button @click="changePath">登录/注册</button>
    </div>    
    <div v-else>
      <profile-data />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Head from '../components/Head.vue'
import ProfileData from '../components/ProfileData.vue'
export default {
  name: "Profile",
  components: {
    Head,
    ProfileData
  },
  data() {
    return {
        
    }
  },
  methods: {
    changePath() {
      this.$router.push({
        path: '/Login',
      })
    },
    exit() {
      this.$store.commit('changeLogin', false)
    },
  }
}
</script>

<style lang="scss">
.empty {
  margin-top: 100px;
  button {
    padding: 12px 30px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
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

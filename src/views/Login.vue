<template>
  <div class="box">
    <Head title="登录" />
    <el-form size="small" label-width="50px" class="login-form">
      <el-form-item label="账号">
        <el-input v-model="login.name" placeholder="请输入账号/手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="login.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="goBack" class="login-btn">取消</el-button>
        <el-button type="primary" @click="Login" class="login-btn">登录</el-button>        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Head from '../components/Head.vue'
export default {
  components: {
    Head
  },
  data() {
    return {
      login: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    Login() {
      let user = this.$store.state.user;
      if(this.login.name==="") {
        this.$message({
          type: 'warning',
          message: '账号不能为空'
        })      
      } else if(this.login.password==="") {
        this.$message({
          type: 'warning',
          message: '密码不能为空'
        })
      } else {
        for(let i=0,len=user.length; i<len; i++) {
          if(this.login.name!=user[i].name&&this.login.name!=user[i].tel) {
            this.$message({
              type: 'warning',
              message: '用户不存在'
            })
          } else if(this.login.password != user[i].password) {
            this.$message({
              type: 'warning',
              message: '密码不正确'
            })
          } else {
            this.$message({
              message: '欢迎你' + this.login.name,
              type: 'success'
            });
            this.$store.commit('changeLogin', true);
            this.$router.go(-1);
            break;
          }
        }
      }  
      this.$store.commit('changeLogin', true);
      this.$router.go(-1);   
    }
  }
}
</script>

<style lang="scss">
.login-form {
  padding: 120px 50px;
  .login-btn {
    margin: 20px 40px ;
    font-size: 14px;
  }
}
</style>

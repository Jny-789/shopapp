<template>
  <div id="nav">
    <router-link to="/Home">
      <div class="nav-item">
        <div class="nav-home" :class="homeActive"></div>
      </div>
    </router-link>
    <router-link to="/Cart">
      <div class="nav-item">
        <div class="nav-cart" :class="cartAcitve"></div>
        <span class="tip">{{this.$store.state.totalNum}}</span>          
      </div>
    </router-link>
    <router-link to="/Profile">
      <div class="nav-item">
        <div class="nav-profile" :class="profileActive"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      homeActive: "home-active",
      cartAcitve: "",
      profileActive: "",
      totalNum: 0
    }
  },
  watch: {
    // 监听路由,路径变化时导航栏图标变化
    $route: {
      handler: function(route) {
        let path = route.path;
        if(path == '/Home') {
          this.homeActive = "home-active";
          this.cartAcitve = "";
          this.profileActive = "";
        } else if(path == '/Cart') {
          this.homeActive = "";
          this.cartAcitve = "cart-active";
          this.profileActive = "";
        } else if(path == '/Profile') {
          this.homeActive = "";
          this.cartAcitve = "";
          this.profileActive = "profile-active";
        } else {
          this.homeActive = "";
          this.cartAcitve = "";
          this.profileActive = "";
        }
      },
      immediate: true
    },
    $store: {
      
    }
  } 
}
</script>

<style lang="scss">
$navHeight: 60px;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#nav {
  height: $navHeight;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.nav-item {
  height: 100%;
  display: inline-block;
  width: 33.33%;
  text-align: center;
  background-color: #efefef;
  div {
    display: inline-block;
    width: $navHeight * 0.75;
    height: $navHeight * 0.75;
    margin-top: $navHeight * 0.125;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: $navHeight * 0.75 * 3  $navHeight * 0.75;
  }
  .tip {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f00;
    color: #fff;
    bottom: 40px;
    left: 260px;
  }
}
.nav-home {
  background-image: url('../assets/icon/home.png');
}
.nav-cart {
  background-image: url('../assets/icon/cart.png');
}
.nav-profile {
  background-image: url('../assets/icon/profile.png');
}
.home-active, .cart-active, .profile-active {
  background-position: 100% 100% !important;
}
</style>
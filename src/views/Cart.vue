<template>
  <div class="box cart">
    <Head title="我的购物车" />
    <div v-if="arr.length==0" class="empty">
      <el-empty description="你没有添加任何商品哦"></el-empty>
    </div>
    <div v-else>
      <div class="tip">
        <i class="el-icon-message-solid"></i>
        满50-15，满70-20，满100-30，满200-60
      </div>
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <img :src="item.img" alt="">
          <h4>{{item.name}}</h4>
          <span class="cart-price">￥ {{item.price}}</span>      
          <span class="cart-num">× {{item.num}}</span>
        </li>
      </ul>
      <div class="total-price">
        <i class="el-icon-wallet"></i>
        <div class="price">
          <div v-if="tPrice < 50">{{totalPrice}}</div>
          <div v-else>
            {{endPrice}}
            <span>{{totalPrice}}</span>
          </div>
        </div>
        <el-button @click="pay">支付</el-button> 
      </div>
    </div>
    <el-drawer
      :withHeader="false"
      :visible.sync="drawer"
      direction="btt"
      size="50%"
      :modal=false>
      <span>支付{{endPrice}}?</span>
      <el-button @click="paySure">确认</el-button>         
    </el-drawer>
    <el-drawer
      :modal="false"
      direction="btt"
      size="50%"
      :visible.sync="drawers">
      <el-result icon="success" title="支付成功"></el-result>
    </el-drawer>    
  </div>
</template>

<script>
import Head from '../components/Head.vue'
export default {
  name: "Cart",
  components: {
    Head
  },
  data() {
    return {
      goods: [],
      arr: [],
      tPrice: 0,
      drawer: false,
      drawers: false
    }
  },
  methods: {
    change() {
      let arr = [], i = 0;
      for(let index in this.goods) {
        if(this.goods[index].num != 0) {
          arr[i] = this.goods[index];
          i++;
        }
      }
      // console.log(arr);
      this.arr = arr;
    },
    pay() {
      if(this.$store.state.isLogin) {
        this.drawer = true;
      } else {
        this.$router.push({
          path: '/Login'
        })
      }     
    },
    paySure() {
      this.drawers = true;
      // 清除缓存
      this.$store.commit('clear');
      // axios.post(api, arr)
      // 清空购物车
      this.arr = [];
      this.drawer = false;
    }
  },
  computed: {
    totalNum() {
      return this.$store.state.totalNum;
    },
    totalPrice() {
      this.tPrice = 0;
      this.arr.forEach(item => {
        this.tPrice += item.num * item.price;
      })
      return "￥" + this.tPrice.toFixed(2)
    },
    endPrice() {     
      if(this.tPrice >= 200) {
        return "￥" + (this.tPrice - 60).toFixed(2)
      } else if(this.tPrice >= 100) {
        return "￥" + (this.tPrice - 30).toFixed(2)
      } else if(this.tPrice >= 70) {
        return "￥" + (this.tPrice - 20).toFixed(2)
      } else if(this.tPrice >= 50) {
        return "￥" + (this.tPrice - 15).toFixed(2)
      }
    }
  },
  watch: {
    totalNum:  function(newval, oldval) {
      this.goods = this.$store.state.cartGoods;
      this.change();
    }
  },
  mounted() {
    this.goods = this.$store.state.cartGoods;   
    this.change();
  }
}
</script>

<style lang="scss">
$totalPriceHeight: 70px;
.cart-price {
  margin-left: 50px;
  font-size: 18px;
}
.cart-num {
  position: relative;
  left: 100px;
  top: -30px;
  font-size: 18px;
}
.empty {
  margin-top: 100px;
}
.cart {
  ul {
  padding-bottom: $totalPriceHeight;
  }
  .el-icon-message-solid {
    color: #bbb;
  }
  .tip {
    text-align: center;
    background-color: rgba($color: #f0f0f0, $alpha: 0.5);
  }
}
.total-price {
  height: $totalPriceHeight;
  width: 100%;
  background-color: rgb(255, 153, 202);
  position: fixed;
  bottom: 60px;
  z-index: 999;
  font-size: 18px;
  .el-icon-wallet {
    font-size: 30px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #fff;
    margin: 10px 30px;
    text-align: center;
    line-height: 50px;
  }
  .price {
    position: absolute;
    left: 100px;
    top: 20px;
    font-size: 18px;
    span {
      font-size: 16px;
      text-decoration: line-through;
      color: #666;
      padding-left: 10px;
    }
  }
  .el-button {
    position: absolute;
    right: 50px;
    top: 15px;
  }
}
</style>

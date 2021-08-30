<template>
  <div class="one-data">
    <img :src="item.img" alt="">
    <h4>{{item.name}}</h4>
    <span>月售 {{item.sale}}</span>
    <span>￥ {{item.price}}</span>
    <div class="btn-div">
      <el-button @click="btnClick" v-if="num===0">+</el-button>
      <el-input-number v-model="num" v-if="num>0" @change="handleChange(item.id)" :min="0" :max="10" size="mini"></el-input-number>
    </div>
  </div> 
</template>

<script>
export default {
  name: "OneData",
  data() {
    return {
      num: 0
    }
  },
  props: {
    item: Object
  },
  methods: {
    handleChange(id) {
      let obj = {
        id: id,
        num: this.num
      }
      this.$store.commit('add', obj);
    },
    btnClick() {
      this.num = 1;
      this.handleChange(this.item.id);
    }
  },
  watch: {
    "$store.state.totalNum": {
      handler: function() {
        this.num = this.$store.state.cartGoods[this.item.id-1].num;
      }
    }
  }
}
</script>

<style lang="scss">
$pink: #ff65af;
img {
  height: 100px;
  width: 100px;
  position: relative;
  top: 10px;
  left: 50px;
}
h4 {
  display: inline-block;
  position: relative;
  top: -60px;
  left: 110px;
  font-size: 18px;
}
.one-data {
  > span:first-of-type {
    position: relative;
    left: 80px;
    top: -30px;
  }
  > span:last-of-type {
    position: relative;
    top: 5px;
    left: 30px;
    font-size: 20px;
    color: $pink;
  }
}
@mixin btns {
  background-color: $pink;
  color: #fff;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  line-height: 20px;
}
.btn-div {
  position: relative;
  left: 350px;
  width: 100px;
  height: 50px;
  top: -50px;
  .el-input-number {
    .el-input-number__decrease {
      left: 0;
      @include btns
    }
    .el-input-number__increase {
      left: 60px;
      @include btns
    }
    .el-input__inner {
      width: 40px;
      position: absolute;
      padding: 3px 10px;
      top: -3px;
      left: 20px;
      border: none;
    }
  }
  .el-button {
    background-color: $pink;
    padding: 0 4px;
    font-size: 20px;
    color: #fff;
    border: none;
    position: relative;
    left: 30px;
    top: 20px;
  }
}
</style>

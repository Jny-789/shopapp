<template>
  <div class="box home">
    <Head title="首页" />
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="全部">
        <ul slot-scope="scope">
          <li v-for="item in goods">
            <one-data :item="item" />         
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="水果" name="水果">
        <ul>
          <li v-for="item in goods" v-if="item.type=='水果'">
            <one-data :item="item" />         
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="肉蛋" name="肉蛋">
        <ul>
          <li v-for="item in goods" v-if="item.type=='肉蛋'">
            <one-data :item="item" />         
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="蔬菜" name="蔬菜">
        <ul>
          <li v-for="item in goods" v-if="item.type=='蔬菜'">
            <one-data :item="item" />          
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="速冻" name="速冻">
        <ul>
          <li v-for="item in goods" v-if="item.type=='速冻'">
            <one-data :item="item" />            
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="零食" name="零食">
        <ul>
          <li v-for="item in goods" v-if="item.type=='零食'">
            <one-data :item="item" />         
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="乳品" name="乳品">
        <ul>
          <li v-for="item in goods" v-if="item.type=='乳品'">
            <one-data :item="item" />          
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="酒饮" name="酒饮">
        <ul>
          <li v-for="item in goods" v-if="item.type=='酒饮'">
            <one-data :item="item" />           
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Head from '../components/Head.vue'
import OneData from '../components/OneData.vue';
import { getGoods } from '../network'
export default {
  name: 'Home',
  components: {
    Head,
    OneData
  },
  data() {
    return {
      activeName: "全部",
      goods: []
    }
  },
  mounted() {
    getGoods()
      .then(res => {
        this.goods = res.data.goods;
        // console.log(this.goods);
        this.$store.commit('initCart', this.goods);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style lang="scss">
.box {
  padding: 70px 0 60px;
}
.el-tabs__header {
  z-index: 999;
  margin: 0;
  position: fixed;
  background-color: #fff;
}
.home ul {
  margin-top: 40px; 
}
li {
    height: 120px;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
  }
</style>

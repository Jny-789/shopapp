import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: [
      {
        name: 123,
        tel: 12345,
        password: 123456
      },
      {
        name: 1,
        tel: 1,
        password: 1
      }
    ],
    cartGoods: [],
    totalNum: 0
  },
  mutations: {
    // 初始化，存入store中
    initCart(state, arr) {
      state.cartGoods = arr;
    },
    changeLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    add(state, obj) {
      let {id, num} = obj;
      state.cartGoods[id-1].num = num;
      // console.log(state.cartGoods);
      let totalNum = 0;
      for(let index in state.cartGoods) {      
        totalNum += state.cartGoods[index].num;
      }
      state.totalNum = totalNum;
    },
    clear(state) {
      for(let index in state.cartGoods) {      
        state.cartGoods[index].num = 0;
        state.totalNum = 0;
      }
    }
  }
})

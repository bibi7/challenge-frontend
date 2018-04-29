import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

//其实不必用vuex， 这里使用vuex只是为了练习一下vuex
const store = new Vuex.Store({
  state: {
    before: '',
    after: '',
    count: []
  },
  mutations: {
    changeBefore (state, payload) {
      state.count.push(1);
      console.log(store.state.count);
      console.log(payload);
      state.before = payload.dateFrom;
      state.after = payload.dateTo;
    }
  },
  getters: {
    done: state => {
      return state.count.filter((count, index) => index > 3)
    }
  }
});

export {store};

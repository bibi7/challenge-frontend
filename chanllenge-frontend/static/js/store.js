import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

//其实不必用vuex， 这里使用vuex只是为了练习一下vuex
const store = new Vuex.Store({
  state: {
    before: '',
    after: '',
    count: 0
  },
  mutations: {
    changeBefore (state, ob) {
      // state.count++;
      // console.log(store.state.count);
      console.log(ob);
      state.before = ob.dateFrom;
      state.after = ob.dateTo;
    }
  }
});

export {store};

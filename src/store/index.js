import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue',
  },
  mutations: {
    increaseCounter (state, rndNum) {
      console.log('rndNum: ', rndNum);
      state.counter += rndNum;
    },
    decreaseCounter (state, rndNum) {
      console.log('rndNum: ', rndNum);
      state.counter -= rndNum;
    },
    setColorCode (state, newColor) {
      state.colorCode = newColor;
    }
  },
  actions: {
    increaseCounter ({commit}) {
      console.log('increaseCOunter(action)');
      axios('https:/www.random.org/integers/?num=1&min=16&max=66&col=1&base=10&format=plain&rnd=new').then(res => {
        console.log('res: ', res);
        commit('increaseCounter', res.data);
      });
    },
    decreaseCounter ({commit}) {
      console.log('decreaseCOunter(action)');
      axios('https:/www.random.org/integers/?num=1&min=16&max=66&col=1&base=10&format=plain&rnd=new').then(res => {
        console.log('res: ', res);
        commit('decreaseCounter', res.data);
      });
    },
    setColorCode ({commit}, newColor) {
      commit('setColorCode', newColor);
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    }
  },
  modules: {
  }
})

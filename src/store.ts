import Vue from 'vue';
import Vuex from 'vuex';

const PHONE_DATA = require('./assets/data/phones.json');

Vue.use(Vuex);

function removeDuplicates(arr: any, prop: string) {
  return arr.filter(
    (obj: any, pos: number, arr: any) =>
      arr.map((mapObj: any) => mapObj[prop]).indexOf(obj[prop]) === pos
  );
}

export default new Vuex.Store({
  state: {
    phoneData: PHONE_DATA[0],
    color: 'Silver',
    memory: '64GB'
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    },
    setMemory(state, memory) {
      state.memory = memory;
    }
  },
  actions: {
    async setColor({ commit }, color) {
      commit('setColor', color);
    },
    async setMemory({ commit }, memory) {
      commit('setMemory', memory);
    }
  },
  getters: {
    productRating: state => state.phoneData.rating,
    productGroupName: state => state.phoneData.groupName,
    currentProduct: state =>
      state.phoneData.deviceSummary
        .filter(
          (item: { colourName: string }) => item.colourName === state.color
        )
        .filter((item: { memory: string }) => item.memory === state.memory),
    productMedia: (state, getters) =>
      getters.currentProduct[0].merchandisingMedia[0].value,
    phoneColor: state => state.color,
    phoneMemory: state => state.memory,
    getOptions: state => (prop: string) => {
      const { deviceSummary } = state.phoneData;
      return removeDuplicates(deviceSummary, prop).map((obj: object) => obj);
    }
  }
});

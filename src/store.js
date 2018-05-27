import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    helloBabe: "hello babe :)",
    links: ["facebook.com", "youtube.com", "instagram.com"]
  },
  getters: {
    couterLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL_LINK: state => {
      state.links = [];
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },
    removeAllLink({ commit }) {
      new Promise(r => {
        commit("REMOVE_ALL_LINK");
        r();
      });
    }
  }
});

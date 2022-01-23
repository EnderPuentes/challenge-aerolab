import vuexPersistedState from "vuex-persistedstate";
export default ({ store }) => {
  vuexPersistedState({
    paths: ["shopping-cart"],
  })(store);
};

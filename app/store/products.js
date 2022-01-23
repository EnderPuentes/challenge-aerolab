export const state = () => ({
  items: [],
  pagination: null,
});

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  UPDATE_ITEMS(state, items) {
    if (items) {
      state.items = state.items.concat(items);
    }
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination;
  },
};

export const actions = {
  async get({ commit, state }, page) {
    await this.$axios
      .$get(`products?page=${page}`)
      .then((response) => {
        if (state.items.length > 0) {
          commit("UPDATE_ITEMS", response.products);
        } else {
          commit("SET_ITEMS", response.products);
        }
        commit("SET_PAGINATION", {
          page: response.page,
          pageCount: response.page_count,
          perPage: response.per_page,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export const getters = {
  items: (state) => state.items,
  pagination: (state) => state.pagination,
};

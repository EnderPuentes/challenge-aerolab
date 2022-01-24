export const state = () => ({
  items: [],
});

export const mutations = {
  ADD_ITEM(state, item) {
    state.items.push(item);
  },
  UPDATE_ITEM(state, { itemId, amount }) {
    const item = state.items.find((item) => item.id === itemId);
    item.amount = Number.parseInt(amount, 10);
  },
  REMOVE_ITEM(state, itemId) {
    const itemIndex = state.items.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      state.items.splice(itemIndex, 1);
    }
  },
};

export const actions = {
  async update({ commit, state }, { action, item }) {
    const itemSC = state.items.find((it) => {
      return it.id === item.id;
    });
    if (!itemSC) {
      await commit("ADD_ITEM", item);
    } else if (action === "add") {
      if ((itemSC.amount = item.amount > 0)) {
        await commit("UPDATE_ITEM", {
          itemId: item.id,
          amount: item.amount,
        });
      } else {
        await commit("REMOVE_ITEM", item.id);
      }
    } else if (action === "update") {
      if (item.amount > 0) {
        await commit("UPDATE_ITEM", {
          itemId: item.id,
          amount: item.amount,
        });
      } else {
        await commit("REMOVE_ITEM", item.id);
      }
    } else if (action === "remove") {
      await commit("REMOVE_ITEM", item.id);
    }
  },
};

export const getters = {
  total: (state) => {
    return {
      price: state.items
        .map((item) => parseFloat(item.price * item.amount))
        .reduce((a, b) => a + b, 0),
      amount: state.items.map((item) => item.amount).reduce((a, b) => a + b, 0),
    };
  },
  items: (state) => state.items,
};

export const state = () => ({
  items: [
    {
      price: 1200,
      amount: 3,
    },
  ],
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
  async update({ commit, state }, { action, itemNew }) {
    const itemCurrent = state.items.find((item) => {
      return item.id === itemNew.id;
    });
    if (!itemCurrent) {
      await commit("SET_ITEM", itemNew);
    } else if (action === "add") {
      if ((itemCurrent.amount = itemNew.amount > 0)) {
        await commit("UPDATE_ITEM", itemNew.id, itemNew.amount);
      } else {
        await commit("REMOVE_ITEM", itemNew.id);
      }
    } else if (action === "update") {
      if (itemNew.amount > 0) {
        await commit("UPDATE_ITEM", itemNew.id, itemNew.amount);
      } else {
        await commit("REMOVE_ITEM", itemNew.id);
      }
    } else if (action === "remove") {
      await commit("REMOVE_ITEM", itemNew.id);
    }
  },
};

export const getters = {
  total: (state) => {
    return {
      price: state.items
        .map((item) => parseFloat(item.price * item.amount))
        .reduce((a, b) => a + b, 0),
      amount: state.items.length,
    };
  },
};

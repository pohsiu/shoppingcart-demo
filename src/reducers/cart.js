import * as Constants from '../constants';

const initialCart = {
  itemsById: {
    "#4231648": {
      count: 1,
      name: "Checkien Momo",
      price: "10.50",
      hashId: "#4231648",
    },
    "#4231649": {
      count: 1,
      name: "Spicy Mexico Potatos",
      price: "8.50",
      hashId: "#4231649",
    },
    "#4231650": {
      count: 1,
      name: "Breakfast",
      price: "5.90",
      hashId: "#4231650",
    },
  }
};

const cart = (state = initialCart, action) => {
  const { type, data } = action;
  switch (type) {
    case Constants.SET_ITEM_COUNT: {
      const { id, num } = data;
      const { itemsById } = state;
      itemsById[id].count = num;
      return {
        ...state,
        itemsById: {
          ...itemsById,
        },
      };
    }
    case Constants.REMOVE_ITEM: {
      const { id } = data;
      const { itemsById } = state;
      delete itemsById[id];
      return {
        itemsById: {
          ...itemsById,
        },
      };
    }
    case Constants.RESET_SHOPPING_CART: {
      const { itemsById } = state;
      Object.keys(itemsById).map(id => {
        itemsById[id].count = 1;
      })
      return {
        itemsById: {
          ...itemsById,
          ...initialCart.itemsById,
        }
      }
    }
    default:
      return state;
  }
}

export default cart;
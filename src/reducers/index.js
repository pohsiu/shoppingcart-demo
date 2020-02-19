import { combineReducers } from 'redux';

const initial = {
  collection: [{
    name: "Checkien Momo",
    price: "10.05",
    hashId: "#4231648",
   }, {
    name: "Spicy Mexico Potatos",
    price: "8.50",
    hashId: "#4231649",
   }, {
    name: "Breakfast",
    price: "5.90",
    hashId: "#4231650",
   }
  ],
  itemsById: {
    "#4231648": {
      count: 1,
      price: "8.50",
    },
    "#4231649": {
      count: 1,
      price: "5.90"
    },
    "#4231650": {
      count: 1,
      price: "5.90",
    },
  }
};

const cart = (state = initial, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_ITEM_COUNT': {
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
    case 'REMOVE_ITEM': {
      const { id } = data;
      const { collection } = state;
      collection.forEach((item, index) => {
        if (id === item.hashId) {
          collection.splice(index, 1);
        }
      });
      delete itemsById[id];
      return {
        collection: [...collection],
        itemsById: {
          ...itemsById,
        },
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  cart,
})
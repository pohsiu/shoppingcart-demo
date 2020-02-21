import * as Constants from '../constants';
import cart from './cart';

describe('reducers', () => {
  describe('cart', () => {
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

    it('should provide the initial cart', () => {
      expect(cart(undefined, {})).toEqual(initialCart)
    });

    it('should handle SET_ITEM_COUNT action', () => {
      expect(cart(initialCart, { type: Constants.SET_ITEM_COUNT, data: { id: '#4231649', num: 2 } })).toEqual({
        itemsById: {
          "#4231648": {
            count: 1,
            name: "Checkien Momo",
            price: "10.50",
            hashId: "#4231648",
          },
          "#4231649": {
            count: 2,
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
      })
    })

    it('should handle SET_ITEM_COUNT action', () => {
      expect(cart(initialCart, { type: Constants.REMOVE_ITEM, data: { id: '#4231649' } })).toEqual({
        itemsById: {
          "#4231648": {
            count: 1,
            name: "Checkien Momo",
            price: "10.50",
            hashId: "#4231648",
          },
          "#4231650": {
            count: 1,
            name: "Breakfast",
            price: "5.90",
            hashId: "#4231650",
          },
        }
      })
    })
  })
})

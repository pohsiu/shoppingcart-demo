import { createSelector } from 'reselect';

const selectCart = state => state.cart;
const selectCreditCard = state => state.creditCard;

const selectCartItemByIds = createSelector(
  selectCart,
  (cart) => (cart && cart.itemsById) || {},
);

const selectCartCollection = createSelector(
  selectCartItemByIds,
  (itemsById) => Object.keys(itemsById).map(key => itemsById[key]),
);

const selectSubTotal = createSelector(
  selectCartCollection,
  (items) => {
    let sum = 0;
    items.map(item => {
      sum = sum + item.price * item.count;
      return null;
    });
    return sum.toFixed(2);
  },
);

const selectIsTyping = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.isTyping,
);

const selectCardName = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.cardName,
);

const selectExpiredMonth = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.expiredMonth,
);

const selectExpiredYear = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.expiredYear,
);

const selectCardCvv = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.cvv,
);

const selectCardNumber = createSelector(
  selectCreditCard,
  (creditCard) => creditCard && creditCard.cardNumber,
)

export {
  selectCartCollection,
  selectSubTotal,
  selectCreditCard,
  selectIsTyping,
  selectCardName,
  selectCardNumber,
  selectCardCvv,
  selectExpiredMonth,
  selectExpiredYear,
}
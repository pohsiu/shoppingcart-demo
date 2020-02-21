import * as Constants from '../constants';

const initialCard = {
  isTyping: false,
  cardNumber: '4040448814882488',
  expiredMonth: '12',
  expiredYear: '2020',
  cvv: '003',
  cardName: 'Giga Torogiamdodj',
}

const creditCard = (state = initialCard, action) => {
  const { type, data } = action;
  switch (type) {
    case Constants.SET_CARD_INFO: {
      return {
        ...state,
        ...data,
      }
    }
    case Constants.SET_TYPING_STATUS: {
      const { isTyping } = data;
      return {
        ...state,
        isTyping,
      }
    }
    case Constants.EMPTY_CREDIT_CARD: {
      return {
        isTyping: false,
        cardNumber: '',
        expiredMonth: '',
        expiredYear: '',
        cvv: '',
        cardName: '',
      };
    }
    default:
      return state;
  }
}

export default creditCard;
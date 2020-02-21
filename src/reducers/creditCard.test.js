import * as Constants from '../constants';
import creditCard from './creditCard';

describe('reducers', () => {
  describe('creditCard', () => {
    const initialCard = {
      isTyping: false,
      cardNumber: '4040448814882488',
      expiredMonth: '12',
      expiredYear: '2020',
      cvv: '003',
      cardName: 'Giga Torogiamdodj',
    }

    it('should provide the initial creditCard', () => {
      expect(creditCard(undefined, {})).toEqual(initialCard)
    });

    it('handle set card info action', () => {
      expect(creditCard(initialCard, { type: Constants.SET_CARD_INFO, data: { cardNumber: '4088' } })).toEqual({
        isTyping: false,
        cardNumber: '4088',
        expiredMonth: '12',
        expiredYear: '2020',
        cvv: '003',
        cardName: 'Giga Torogiamdodj',
      })
    })

    it('handle set typing status action', () => {
      expect(creditCard(initialCard, { type: Constants.SET_TYPING_STATUS, data: { isTyping: true } })).toEqual({
        isTyping: true,
        cardNumber: '4040448814882488',
        expiredMonth: '12',
        expiredYear: '2020',
        cvv: '003',
        cardName: 'Giga Torogiamdodj',
      })
    })
  })
})

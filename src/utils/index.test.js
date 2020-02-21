import { processNumber, numberLimit } from './index';

it('processNumber, output only number and < 99', () => {
  expect(processNumber('gqwe')).toEqual(0);
  expect(processNumber('20')).toEqual(20);
  expect(processNumber('999')).toEqual(99);
});

const numberEvent = {
  target: {
    value: '100000',
  },
};
const stringEvent = {
  target: {
    value: 'test',
  },
}
const emptyEvent = {
  target: {
    value: '',
  },
}
const cb = value => value;
const eventFunc = (event) => {
  return event.target.value;
}

it('numberLimit functest, allow empty string but in limit number', () => {
  // empty string should pass
  expect(numberLimit(5)(cb(eventFunc))(emptyEvent)).toEqual('');
  // number test limit
  expect(numberLimit(5)(cb(eventFunc))(numberEvent)).toEqual(undefined);
  expect(numberLimit(7)(cb(eventFunc))(numberEvent)).toEqual(numberEvent.target.value);
  // input string non number expected failed
  expect(numberLimit(10)(cb(eventFunc))(stringEvent)).toEqual(undefined);
  expect(numberLimit(3)(cb(eventFunc))(stringEvent)).toEqual(undefined);
});
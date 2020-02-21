export const processNumber = (value) => {
  const number = parseInt(value);
  if (number > 99) return 99;
  if (number && number > 0) return number;
  return 0;
}

// only type number and limit in length
export const numberLimit = len => cb => event => {
  const { value } = event.target;
  if (value === '') return cb(event); // allow empty
  const reg = /^\d+$/; // number only;
  if (value.length > len || !reg.test(value)) return;
  return cb(event);
};

export const required = (value) => {
  if (value && value.trim()) return null;
  return 'You have not entered text!';
};

export const maxSymbols = (m) => (value) => {
  if (value.length > m) return `Max length string is ${m} symbols`;
  return null;
};

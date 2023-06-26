const validatePersonDocument = (document: string): boolean => {
  if (document == "00000000000") return false;
  if (document.length != 11) return false;

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(document.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(document.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(document.substring(10, 11))) return false;

  return true;
};

const validateCompanyDocument = (document: string): boolean => {
  let size = document.length - 2;
  let numbers = document.substring(0, size);
  let digits = document.substring(size);
  let sum = 0;
  let post = size - 7;
  let result: number = 0;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * post--;
    if (post < 2) {
      post = 9;
    }
  }

  result = (sum % 11 < 2 ? 0 : 11) - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }

  size = size + 1;
  numbers = document.substring(0, size);
  sum = 0;
  post = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * post--;
    if (post < 2) {
      post = 9;
    }
  }

  result = (sum % 11 < 2 ? 0 : 11) - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) {
    return false;
  }

  return true;
};

export const validateDocument = (document: string): boolean => {
  if (document.length !== 11 && document.length !== 14) {
    return false;
  }

  if (document.length === 11) {
    return validatePersonDocument(document);
  }

  return validateCompanyDocument(document);
};

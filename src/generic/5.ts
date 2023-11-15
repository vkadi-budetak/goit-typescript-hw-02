/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  key;
  value;
}

function getKeyValuePair<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

export {};
   
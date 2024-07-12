import AsyncStorage from '@react-native-async-storage/async-storage';

function foo() {
  var x = 1;
}
function bar() {
  var x = foo();
}

export const add = (a: number, b: number) => {
  var x = 1;
  console.log(x);
  function unused() {
    return 5;
  }
  bar();
  return a + b;
};

export const subtract = (a: number, b: number) => {
  return a - b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
};

export const divide = (a: number, b: number) => {
  return a / b;
};

export const fetchUserList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch user list');
  }
  return response.json();
};

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('your-key', value);
  } catch (e) {
    // saving error
  }
};

export const fetchData = async () => {
  try {
    const value = await AsyncStorage.getItem('your-key');
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
};

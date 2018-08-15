import { AsyncStorage } from 'react-native';
const saveCart = async (cartArray, matv) => {
  try {
    const keyName = '@Cart:key'
    await AsyncStorage.setItem(`${keyName}${matv}`, JSON.stringify(cartArray));
  } catch (e) {
    console.log(e);
  }
}

export default saveCart;

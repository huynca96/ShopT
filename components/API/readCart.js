import { AsyncStorage } from 'react-native';

const readCart = async(matv) => {
  try {
    const keyName = '@Cart:key'
    const cartArray = await AsyncStorage.getItem(`${keyName}${matv}`);
    if(cartArray !== null){
      return JSON.parse(cartArray);
    }
    return [];
  } catch (e) {
    return [];
  }
}

export default readCart;

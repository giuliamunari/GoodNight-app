import React from "react";
import { Image } from 'react-native';
import styles from './Components.styles'

function Logo() {
  return <Image style={styles.logo} source={require('../assets/logo.png')} />
}

export default Logo;

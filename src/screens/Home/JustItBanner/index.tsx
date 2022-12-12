/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { styles } from './styles';

const JustItBanner: FC = () => (
  <View style={styles.container}>
    <LottieView autoPlay style={styles.animation} source={require('@assets/animations/astronaut.json')} />
    <Text style={styles.text}>Por enquanto, é isso!</Text>
    <Text style={styles.text}>Novidades chegam embreve!</Text>
  </View>
);

export { JustItBanner };

import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const JustItBanner: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Por enquanto, é isso!</Text>
    <Text style={styles.text}>Novidades chegam embreve!</Text>
  </View>
);

export { JustItBanner };

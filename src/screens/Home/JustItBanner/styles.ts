import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontFamily: fonts.P2.family,
    fontSize: fonts.P2.size,
    lineHeight: fonts.P2.size * 1.5,
    color: colors.text,
  },
});

export { styles };

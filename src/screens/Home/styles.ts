import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.H1.size,
    color: colors.text,
    fontFamily: fonts.H1.family,
  },
});

export { styles };

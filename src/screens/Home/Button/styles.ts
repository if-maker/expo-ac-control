import { StyleSheet } from 'react-native';

import { colors, fonts } from '@styles';
import { tint } from 'polished';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    height: 90,
    aspectRatio: 1.5,
  },
  label: {
    textAlign: 'center',
    fontFamily: fonts.P2.family,
    fontSize: fonts.P2.size,
    lineHeight: fonts.P2.size * 1.5,
    color: tint(0.2, colors.text),
  },
});

export { styles };

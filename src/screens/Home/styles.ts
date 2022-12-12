import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { colors, fonts } from '@styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 16,
    paddingHorizontal: 32,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  flatList: { flexGrow: 0 },
  separator: { width: 6 },
  sectionText: {
    fontFamily: fonts.SB2.family,
    fontSize: fonts.SB2.size,
    lineHeight: fonts.SB2.size * 1.5,
    color: colors.text,
    marginBottom: 12,
  },
});

export { styles };

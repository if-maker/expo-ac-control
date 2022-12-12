import { FC, useMemo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { transparentize } from 'polished';

import { colors } from '@styles';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  focus: boolean;
}

const Button: FC<ButtonProps> = ({ focus, ...rest }) => {
  const dynamicStyle = useMemo(
    () => ({
      borderColor: focus ? colors.primary : colors.secondary,
      backgroundColor: focus ? transparentize(0.8, colors.primary) : 'transparent',
    }),
    [focus]
  );

  return (
    <TouchableOpacity {...rest} style={[styles.container, dynamicStyle]}>
      <Text style={styles.label}>ArduinoId</Text>
    </TouchableOpacity>
  );
};

export { Button };

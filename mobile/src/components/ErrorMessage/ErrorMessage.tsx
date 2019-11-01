import React from 'react';
import { Text, View } from 'react-native';

import { IProps } from './types';
import { styles } from './styles';

export const ErrorMessage = (props: IProps) => {
  return (
    <View>
      <Text style={styles.errorStyle}>{props.text}</Text>
    </View>
  );
};

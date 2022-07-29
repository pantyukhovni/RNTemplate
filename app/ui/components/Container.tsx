import type { ComponentType, PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

type OwnProps<T> = PropsWithChildren<T> & {
  component: ComponentType<T>;
};

const Container = <P, T extends PropsWithChildren<P>>({
  component: View,
  ...props
}: OwnProps<T>) => {
  // @ts-ignore FIXME: исправить типы
  return <View {...props} style={styles.container} />;
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 16,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: "#2D71B5"
  },
  sub: {
    fontSize: 12,
    fontFamily: "Poppins-Light",
    color: "#707070",
    opacity: 0.7
  }
});

interface Props {
  title: string;
  subTitle: string
}

const Header: React.FC<Props> = ({title, subTitle}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sub}>{subTitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Child from '../components/Child';

import ChildModel from '../utils/child.model';
import HLine from './HLine';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    opacity: 0.7,
    marginBottom: 16,
    fontSize: 12,
  },
  line: {
    marginBottom: 16,
    justifyContent: 'center',
  },
});

interface Props {
  children: ChildModel[];
  title: string;
  nav?: any
  onChildPress: Function
}

const ChildList: React.FC<Props> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children.map((child, index) => {
        const hr =
          props.children.length > 1 && index > 0 ? (
            <HLine color="#EDEDED" />
          ) : null;
        return (
          <TouchableOpacity key={child.id} onPress={() => props.onChildPress(child.id, child.getFullName(), child.image)}>
            <View style={styles.line}>{hr}</View>
            <Child name={child.getFullName()} grade={child.grade} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChildList;

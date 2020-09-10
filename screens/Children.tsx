import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Header from '../components/Header';
import ChildList from '../components/ChildList';

import ChildModel from '../utils/child.model';

import {fetchChildren} from '../utils/api';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    width: '100%',
    padding: 16,
    flex: 1,
  },
});

interface Props {
  navigation: any
}

const Children: React.FC<Props> = ({navigation}) => {
  const [children, setChildren] = useState<ChildModel[]>([]);

  useEffect(() => {
    const getUserChildren = async () => {
      const res = await fetchChildren('123');
      const children = res.map(
        (child) =>
          new ChildModel(
            child.id,
            child.firstName,
            child.lastName,
            child.middleName,
            child.delegated,
            child.grade,
            child.image
          ),
      );
      setChildren([...children]);
    };

    getUserChildren();
  }, []);

  const handleChildPress = (id: string, name: string, image: string) => {
    console.log('id', id)
    navigation.navigate("ChildDetails", {studentId: id, studentName: name, studentImage: image})
  }

  const delegatedChildren = children.filter(
    (child) => child.delegated === true,
  );
  const ownChildren = children.filter((child) => child.delegated === false);

  return (
    <ScrollView style={styles.wrapper}>
      <Header title="Children" subTitle="List of students assigned to you" />
      <View style={styles.list}>
        <View>
          <ChildList onChildPress={handleChildPress} children={ownChildren} title="My children" nav={navigation} />
        </View>
        <View>
          <ChildList onChildPress={handleChildPress} children={delegatedChildren} title="Delegated" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Children;

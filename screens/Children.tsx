import React, {useEffect, useState} from 'react';
import {View, ScrollView, ViewStyle} from 'react-native';

import Header from '../components/Header';
import ChildList from '../components/ChildList';

import ChildModel from '../utils/child.model';

import {fetchChildren} from '../utils/api';

const ROOT: ViewStyle = {
  width: '100%',
  flex: 1,
  backgroundColor: 'white',
};

const LIST: ViewStyle = {
  width: '100%',
  padding: 16,
  flex: 1,
};

interface Props {
  navigation: any;
}

const Children: React.FC<Props> = ({navigation}) => {
  const [children, setChildren] = useState<ChildModel[]>([]);

  useEffect(() => {
    let isCancelled = false;
    const getUserChildren = async () => {
      try {
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
              child.image,
            ),
        );
        if (!isCancelled) {
          setChildren([...children]);
        }
      } catch (error) {}
    };

    getUserChildren();

    return () => {
      isCancelled = true
    };
  }, []);

  const handleChildPress = (id: string, name: string, image: string) => {
    navigation.navigate('ChildDetails', {
      studentId: id,
      studentName: name,
      studentImage: image,
    });
  };

  const delegatedChildren = children.filter(
    (child) => child.delegated === true,
  );
  const ownChildren = children.filter((child) => child.delegated === false);

  return (
    <ScrollView style={ROOT}>
      <Header title="Children" subTitle="List of students assigned to you" />
      <View style={LIST}>
        <View>
          <ChildList
            onChildPress={handleChildPress}
            children={ownChildren}
            title="My children"
            nav={navigation}
          />
        </View>
        <View>
          <ChildList
            onChildPress={handleChildPress}
            children={delegatedChildren}
            title="Delegated"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Children;

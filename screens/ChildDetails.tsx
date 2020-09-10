import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Pic from '../components/Pic';
import DetailOption from '../components/DetailOption';

import COLORS from '../constants/colors';
import {detailOptions} from '../utils/data';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 157,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  pic__container: {
    marginBottom: 19,
  },
  studentId: {
    color: COLORS.MEDIUM_GREY,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  studentName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.DARK_GREY,
  },
  options: {
    width: '100%',
    padding: 16,
    flex: 1,
  },
});

interface Props {
  route: any;
  navigation: any;
}

const ChildDetails: React.FC<Props> = ({route, navigation}) => {
  const {studentId, studentName, studentImage} = route.params;

  const handleDetailTap = (id: string) => {
    console.log('detail id', id);
    navigation.navigate('Schedule', {childName: studentName, childImage: studentImage});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}>
        <View style={styles.pic__container}>
          <Pic image={studentImage} />
        </View>
        <Text style={styles.studentId}>{studentId}</Text>
        <Text style={styles.studentName}>{studentName}</Text>
      </View>
      <View style={styles.options}>
        <FlatList
          data={detailOptions}
          renderItem={({item}) => (
            <DetailOption option={item} onTap={handleDetailTap} />
          )}
        />
      </View>
    </View>
  );
};

export default ChildDetails;

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Pic from '../components/Pic';
import DetailOption from '../components/DetailOption';
import ScheduleItem from '../components/ScheduleItem';

import COLORS from '../constants/colors';
import {detailOptions} from '../utils/data';

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
};

const BANNER: ViewStyle = {
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
};

const PROFILE__PIC: ViewStyle = {
  marginBottom: 19,
};

const STUDENT__ID: TextStyle = {
  color: COLORS.MEDIUM_GREY,
  fontSize: 14,
  fontFamily: 'Poppins-Light',
};

const STUDENT__NAME: TextStyle = {
  fontFamily: 'Poppins-Bold',
  fontSize: 16,
  color: COLORS.DARK_GREY,
};

const OPTIONS: ViewStyle = {
  width: '100%',
  padding: 16,
  flex: 1,
};

const ONGOING: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 21,
};

interface Props {
  route: any;
  navigation: any;
}

const ChildDetails: React.FC<Props> = ({route, navigation}) => {
  const {studentId, studentName, studentImage} = route.params;

  const handleDetailTap = (id: string) => {
    navigation.navigate('Schedule', {
      childName: studentName,
      childImage: studentImage,
    });
  };

  return (
    <View style={ROOT}>
      <View style={BANNER}>
        <View style={PROFILE__PIC}>
          <Pic image={studentImage} />
        </View>
        <Text style={STUDENT__ID}>{studentId}</Text>
        <Text style={STUDENT__NAME}>{studentName}</Text>
      </View>
      <View style={ONGOING}>
        <ScheduleItem
          item={{
            title: 'Lunch break',
            time: '12:00pm - 1:00pm',
            subjectId: '03',
            ongoing: true,
          }}
          showLabel={false}
        />
      </View>

      <View style={OPTIONS}>
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

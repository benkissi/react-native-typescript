import {isArguments} from 'lodash';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScheduleIcon from '../assets/svg/ScheduleIcon';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingRight: 20,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 77,
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 77,
    flex: 2,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  details: {
    marginLeft: 20,
  },
  title: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#707070',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    opacity: 0.7,
  },
  time__label: {
    width: 64,
    height: 77,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  time__label__item: {
    color: '#707070',
    fontFamily: 'Poppins-Regular',
    opacity: 0.7,
    fontSize: 12,
  },
  ongoing: {
    width: 58,
    backgroundColor: 'rgba(224, 115, 115, 0.1)',
    marginLeft: 'auto',
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  ongoing__text: {
    color: '#E07373',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  icon: {
    alignSelf: 'flex-start',
  },
});

interface Props {
  item: {title: string; time: string; subjectId: string; ongoing: boolean};
}

const ScheduleItem: React.FC<Props> = ({item}) => {
  const [timeLabels, setTimeLabels] = useState<string[]>([]);
  const colors: {[key: string]: string} = {
    '01': '#E07373',
    '02': '#77B585',
    '03': '#6B7CC6',
    '04': '#8EC6BD',
  };

  useEffect(() => {
    const timeLabels: string[] = getTimeLabels(item.time);
    setTimeLabels(timeLabels);
  }, []);

  const getTimeLabels = (time: string) => {
    let timeArray = time.split('-');
    let trimmedTimeLabels: string[] = [];

    timeArray.forEach((time) => {
      const colonIndex = time.indexOf(':');
      const arr = time.split('');
      arr.splice(colonIndex, 3);
      trimmedTimeLabels.push(arr.join('').trim().toUpperCase());
    });
    return trimmedTimeLabels;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.time__label}>
          <Text style={styles.time__label__item}>{timeLabels[0]}</Text>
          <Text style={{...styles.time__label__item, marginTop: 'auto'}}>
            {timeLabels[1]}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.icon}>
            <ScheduleIcon color={colors[item.subjectId]} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          {item.ongoing ? (
            <View style={styles.ongoing}>
              <Text style={styles.ongoing__text}>Ongoing</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default ScheduleItem;

import _ from 'lodash';
import React, {useState} from 'react';
import {
  Platform,
  Alert,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';

import ScheduleItem from '../components/ScheduleItem';
import {getPastDate, getFutureDates} from '../utils/funcs';
import {sampleSchedules as ITEMS} from '../utils/data';
import {Schedule, Interface_ScheduleItem} from '../utils/types';

import testIDs from '../utils/testIds'

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
const themeColor = '#00AAAF';
const lightThemeColor = '#EBF9F9';

const CALENDAR: ViewStyle = {
  borderTopWidth: 0,
  paddingLeft: 20,
  paddingRight: 20,
};

const SECTION: TextStyle = {
  backgroundColor: '#FAFAFA',
  color: 'grey',
  textTransform: 'capitalize',
};

const ITEM: ViewStyle = {
  padding: 20,
  backgroundColor: 'white',
  borderBottomWidth: 1,
  borderBottomColor: 'lightgrey',
  flexDirection: 'row',
};

const EMPTYITEM: ViewStyle = {
  paddingLeft: 20,
  height: 52,
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: 'lightgrey',
};

const EMPTYITEM_TEXT: TextStyle = {
  color: 'lightgrey',
  fontSize: 14,
};

interface Props {
  weekView?: boolean
}

const ExpandableCalendarScreen:React.FC<Props> = (props) => {
  const [state, setState] = useState({});

  const onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  };

  const onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  const buttonPressed = () => {
    Alert.alert('show more');
  };

  const itemPressed = (id: string) => {
    Alert.alert(id);
  };

  const renderEmptyItem = () => {
    return (
      <View style={EMPTYITEM}>
        <Text style={EMPTYITEM_TEXT}>No Events Planned</Text>
      </View>
    );
  };

  const renderItem = ({item}:{item: Interface_ScheduleItem}) => {
    
    if (_.isEmpty(item)) {
      return renderEmptyItem();
    }

    return <ScheduleItem item={item} />;
  };

  const getMarkedDates = () => {
    const marked: {
      [name: string]: {};
    } = {};

    ITEMS.forEach((item) => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      } else {
        marked[item.title] = {disabled: true};
      }
    });
    return marked;
  };

  const getTheme = () => {
    const disabledColor = 'grey';

    return {
      // arrows
      arrowColor: 'black',
      arrowStyle: {padding: 0},
      // month
      monthTextColor: 'black',
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: 'black',
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: 'white',
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: 'white',
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2},
    };
  };

  return (
    <CalendarProvider
      date={ITEMS[0].title}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton={false}
      disabledOpacity={0.6}
      // theme={{
      //   todayButtonTextColor: themeColor
      // }}
      // todayBottomMargin={16}
      style={{
        backgroundColor: '#FAFAFA',
        borderBottomWidth: 0,
        borderColor: 'white',
      }}>
      {props.weekView ? (
        <WeekCalendar
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
          markedDates={getMarkedDates()}
        />
      ) : (
        <ExpandableCalendar
          testID={testIDs.expandableCalendar.CONTAINER}
          // horizontal={false}
          hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          headerStyle={CALENDAR} // for horizontal only
          // disableWeekScroll
          // theme={this.getTheme()}
          disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          leftArrowImageSource={require('../assets/images/previous.png')}
          rightArrowImageSource={require('../assets/images/next.png')}
        />
      )}

      <AgendaList
        sections={ITEMS}
        extraData={state}
        renderItem={renderItem}
        sectionStyle={SECTION}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

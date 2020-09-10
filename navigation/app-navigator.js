import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Children from '../screens/Children';
import ChildrenNavigation from './children-navigator'

import ChildrenTabIcon from '../assets/svg/ChildrenTabIcon';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <>
      <Tab.Navigator
        headerMode="float"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon;

            if (route.name === 'Children') {
              icon = <ChildrenTabIcon color={color} size={size} />;
            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2D71B5',
          inactiveTintColor: '#A8A8A8',
          labelStyle: {
            fontFamily: 'Poppins-Bold',
          },
        }}>
        <Tab.Screen name="Children" component={ChildrenNavigation} />
      </Tab.Navigator>
    </>
  );
}

export default Navigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Children from '../screens/Children';
import ChildDetails from '../screens/ChildDetails';
import Schedule2 from '../screens/Schedule2';

import ChildNavHeader from '../components/ChildNavHeader';
import NavBackButton from '../components/NavBackButton';
import NavRightButton from '../components/NavRightButton';

const Stack = createStackNavigator();

const ChildrenNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Children"
        component={Children}
      />
      <Stack.Screen
        name="ChildDetails"
        component={ChildDetails}
        options={{
          headerTitle: "Child's Details",
          header: ({scene, previous, navigation}) => {
            const {options} = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            return (
              <ChildNavHeader
                title={title}
                headerImage={false}
                leftButton={
                  previous ? (
                    <NavBackButton onPress={navigation.goBack} />
                  ) : undefined
                }
                rightButton={<NavRightButton label="Edit" />}
                style={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Schedule"
        headerMode="screen"
        component={Schedule2}
        options={{
          headerTitle: 'Schedule',
          header: ({scene, previous, navigation}) => {
            const {options} = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const childName = scene.route.params.childName
            const childImage = scene.route.params.childImage

            return (
              <ChildNavHeader
                title={childName}
                headerImage={true}
                image={childImage}
                leftButton={
                  previous ? (
                    <NavBackButton onPress={navigation.goBack} />
                  ) : undefined
                }
                rightButton={<NavRightButton label="Edit" />}
                style={options.headerStyle}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ChildrenNavigation;

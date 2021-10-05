import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Calendar, Dashboard, Medication } from '../screens';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

function RootNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    title: 'dashboard',
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome5
                            name="tablets"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="medication"
                component={Medication}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign name="calendar" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

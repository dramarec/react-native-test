/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Calendar, Dashboard, Medication, MedicationDetails } from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DashboardScreenNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    paddingBottom: 60,
                    fontSize: 22,
                },
            }}>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={() => {
                    return {
                        title: 'dashboard',
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather name="menu" size={28} />
                            </TouchableOpacity>
                        ),
                    };
                }}
            />
        </Stack.Navigator>
    );
}

function MedicationScreenNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22,
                },
            }}>
            <Stack.Screen
                name="Medication"
                component={Medication}
                options={() => {
                    return {
                        title: 'medication',
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather name="menu" size={28} />
                            </TouchableOpacity>
                        ),
                    };
                }}
            />
            <Stack.Screen
                name="MedicationDetails"
                component={MedicationDetails}
                options={() => {
                    return {
                        title: 'medication details',
                    };
                }}
            />
        </Stack.Navigator>
    );
}

function CalendarScreenNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22,
                },
            }}>
            <Stack.Screen
                name="Calendar"
                component={Calendar}
                options={() => {
                    return {
                        title: 'calendar',
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather name="menu" size={28} />
                            </TouchableOpacity>
                        ),
                    };
                }}
            />
        </Stack.Navigator>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
            }}>
            <Tab.Screen
                name="dashboardScreen"
                component={DashboardScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={45} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="medicationScreen"
                component={MedicationScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="tablets" size={35} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="calendarScreen"
                component={CalendarScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" size={35} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calendar, Dashboard, Medication } from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DashboardScreenNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22,
                },
            }}>
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
                options={() => {
                    return {
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather
                                    name="menu"
                                    size={24}
                                    backgroundColor="#ccfd"
                                />
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
                name="medication"
                component={Medication}
                options={() => {
                    return {
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather
                                    name="menu"
                                    size={24}
                                    backgroundColor="#ccfd"
                                />
                            </TouchableOpacity>
                        ),
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
                name="calendar"
                component={Calendar}
                options={() => {
                    return {
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Feather
                                    name="menu"
                                    size={24}
                                    backgroundColor="#ccfd"
                                />
                            </TouchableOpacity>
                        ),
                    };
                }}
            />
        </Stack.Navigator>
    );
}

function RootNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: '#ffbd7d',
                activeTintColor: '#e47911',
            }}
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="dashboard"
                component={DashboardScreenNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="medication"
                component={MedicationScreenNavigator}
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
                name="calendar"
                component={CalendarScreenNavigator}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign name="calendar" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { COLORS } from '../assets/constants';
import CustomDrawerMenu from './CustomDrawerMenu';
import Home from '../../screens/Home/Home';
import Question from '../../screens/Question/Question';
import Experience from '../../screens/Experience/Experience';
import { DrawerActions } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerMenu {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => null,
                headerRight: () => (
                    <IconButton
                        icon="menu"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                ),
                headerStyle: {
                    backgroundColor: COLORS.white,
                },
                headerTitleAlign: 'center',
                drawerStyle: {
                    width: '85%',
                },
            })}
        >
            <Drawer.Screen name="Business & First Class ​Reviews" component={Home} />
            {/* Government Section */}
            <Drawer.Screen name="All Government Job" component={Question} />
            <Drawer.Screen name="All Government Job Details" component={Experience} />
        </Drawer.Navigator>
    );
}

export default function NavigationBar() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={COLORS.white} barStyle="light-content" />
            <DrawerGroup />
        </NavigationContainer>
    );
}

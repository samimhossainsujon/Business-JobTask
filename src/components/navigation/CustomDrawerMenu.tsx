import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking, Share, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/constants';


export default function CustomDrawerMenu(props: any) {
    const handleDrawerItemClick = () => {
        props.navigation.closeDrawer();
    };

    const openPlayStoreRating = () => {
        const packageName = 'com.samimhossain.jobscircular';
        const playStoreUrl = `market://details?id=${packageName}`;
        Linking.openURL(playStoreUrl).catch(err =>
            console.error('Error opening Play Store:', err),
        );
    };

    const MoreApps = () => {
        const playStoreLink =
            'https://play.google.com/store/apps/developer?id=MY+RIGIL+SOFT';
        Linking.openURL(playStoreLink).catch(err =>
            console.error('An error occurred while opening the Play Store:', err),
        );
    };

    // cheek and fix
    const shareApp = async () => {
        try {
            const playStoreLink =
                'https://play.google.com/store/apps/details?id=com.samimhossain.jobscircular';
            const result = await Share.share({
                message: `Check out this awesome app: ${playStoreLink}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared successfully
                } else {
                    // Shared successfully
                }
            } else if (result.action === Share.dismissedAction) {
                // Share sheet dismissed
            }
        } catch (error) {
            console.error('Error sharing app:');
        }
    };

    // update link 
    const CheckForUpdate = () => {
        const updateLink =
            'https://play.google.com/store/apps/details?id=com.samimhossain.jobscircular';
        Linking.openURL(updateLink).catch(err =>
            console.error('CheckForUpdate', err),
        );
    };

    // facebook group link 
    const FacebookGroup = () => {
        const facebookLink = 'https://www.facebook.com/groups/chakrirkhobor.news';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookGroup:', err),
        );
    };

    // Whatsapp Channel link 
    const WhatsappChannel = () => {
        const facebookLink = 'https://whatsapp.com/channel/0029VaHClNq3AzNLYzoynM1w';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookGroup:', err),
        );
    };



    // Telegram Channel link 
    const TelegramChannel = () => {
        const facebookLink = 'https://t.me/alljobbd';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookGroup:', err),
        );
    };


    // contact to facebook
    const ContactUs = () => {
        const facebookLink = 'https://www.facebook.com/alljobsbdTeletalks';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookPage:', err),
        );
    };








    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 8,
                            marginBottom: 10,
                            padding: 10,
                        }}
                        onPress={handleDrawerItemClick}>
                        <AntDesign name="arrowleft" color={COLORS.background} size={35} />
                        <Text style={{ marginLeft: 10, color: COLORS.background, fontWeight: 'bold', fontSize: 22 }}>
                            Close Menu
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* Help Center*/}
                <>
                    <DrawerItem
                        icon={({ }) => (
                            <AntDesign name="android1" color={COLORS.background} size={27} />
                        )}
                        label="More Apps"
                        onPress={MoreApps}
                        focused={props.state.routeNames[props.state.index] === 'MoreApps'}
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />

                    <DrawerItem
                        icon={() => (
                            <MaterialIcons name="security-update" color={COLORS.background} size={27} />
                        )}
                        label="Check For Update"
                        onPress={CheckForUpdate}
                        focused={
                            props.state.routeNames[props.state.index] === ''
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />

                    <DrawerItem
                        icon={() => (
                            <AntDesign name="facebook-square" color={COLORS.background} size={27} />
                        )}
                        label="Facebook Group"
                        onPress={FacebookGroup}
                        focused={
                            props.state.routeNames[props.state.index] === ''
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />
                    <DrawerItem
                        icon={() => (
                            <FontAwesome name="whatsapp" color={COLORS.background} size={27} />
                        )}
                        label="Join Whatsapp Channel"
                        onPress={WhatsappChannel}
                        focused={
                            props.state.routeNames[props.state.index] === ''
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />


                    <DrawerItem
                        icon={() => (
                            <FontAwesome name="telegram" color={COLORS.background} size={27} />
                        )}
                        label="Join Telegram Channel"
                        onPress={TelegramChannel}
                        focused={
                            props.state.routeNames[props.state.index] === ''
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />



                    <DrawerItem
                        icon={() => (
                            <AntDesign name="contacts" color={COLORS.background} size={27} />
                        )}
                        label="Contact Us"
                        onPress={ContactUs}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />

                    <DrawerItem
                        icon={() => (
                            <AntDesign name="sharealt" color={COLORS.background} size={27} />
                        )}
                        label="অ্যাপ শেয়ার করুন"
                        onPress={shareApp}
                        focused={props.state.routeNames[props.state.index] === 'ShareApp'}
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />

                    <DrawerItem
                        icon={() => (
                            <AntDesign name="star" color={COLORS.background} size={27} />
                        )}
                        label="5 স্টার দিন"
                        onPress={openPlayStoreRating}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                        labelStyle={{ color: COLORS.black, fontWeight: '900', fontSize: 17 }}
                    />
                </>





                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 8,
                            marginBottom: 15,
                            padding: 10,
                        }}
                        onPress={handleDrawerItemClick}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

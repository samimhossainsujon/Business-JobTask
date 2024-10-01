import React from 'react';
import Footer from '../Footer/Footer';
import ADS from '../ADS/ADS';
import Post from '../Post/Post';
import Search from '../Search/Search';
import Carousel from '../Carousel/Carousel';
import { Text, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../../components/assets/constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ title, onPress, iconName }: { title: string; onPress: () => void; iconName: string }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                backgroundColor: COLORS.black,
                paddingVertical: 20,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5
            }}
        >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 5 }}>{title}</Text>
            <FontAwesome5
                name={iconName}
                size={25}
                color="#fff"
                style={{ marginLeft: 10 }}
            />
        </TouchableOpacity>
    );
};

const Home = () => {
    return (
        <>
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, marginLeft: 20, marginRight: 20, padding: 10 }}>
                    <CustomButton
                        title="Share your experience"
                        onPress={() => console.log('Button 1 Pressed')}
                        iconName="user-friends"
                    />
                    <CustomButton
                        title="Ask a question"
                        onPress={() => console.log('Button 2 Pressed')}
                        iconName="user-tie"
                    />
                </View>
                <Search />
                <Carousel />
                <Post />
                <ADS />
            </View>
            <Footer />
        </>
    );
};

export default Home;

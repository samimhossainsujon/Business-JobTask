import { View, Text, Image } from 'react-native';
import React from 'react';


const img = require('../../components/assets/images/cover.jpg');

const Carousel = () => {
    return (
        <View>
            <Image
                style={{ height: 100, width: '100%' }}
                source={img}
                resizeMode="cover"
            />
        </View>
    );
};

export default Carousel;

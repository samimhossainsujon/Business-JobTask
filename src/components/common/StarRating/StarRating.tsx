import { View, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../assets/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface PostProps {
    rating: number;
}

const StarRating: React.FC<PostProps> = ({ rating }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {[...Array(rating)].map((_, index) => (
                <AntDesign
                    key={index}
                    name="star"
                    color={COLORS.Raging}
                    size={20}
                    style={{ marginRight: 5 }}
                />
            ))}
            <Text style={{ fontSize: 24, marginLeft: 10 }}>{rating}</Text>
        </View>
    );
};

export default StarRating;

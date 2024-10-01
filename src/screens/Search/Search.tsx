import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../components/assets/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = () => {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <View>
            <View
                style={{
                    marginLeft: 3,
                    marginTop: 20,
                    alignItems: 'center',
                    marginBottom: 10,
                    position: 'relative',
                }}
            >
                <TextInput
                    style={{
                        backgroundColor: COLORS.white,
                        color: COLORS.black,
                        fontSize: 20,
                        borderRadius: 10,
                        width: '100%',
                        paddingHorizontal: 15,
                        padding: 15
                    }}
                    placeholder="Search anything..."
                    placeholderTextColor={COLORS.black}
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />


                <AntDesign
                    name="search1"
                    color={COLORS.white}
                    size={24}
                    style={{
                        position: 'absolute',
                        right: 9,
                        top: '30%',
                        backgroundColor: COLORS.black,
                        padding: 10,
                        borderRadius: 10,
                        transform: [{ translateY: -12 }],
                    }}
                />
            </View>
        </View>
    );
}

export default Search;

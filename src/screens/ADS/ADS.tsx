import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../components/assets/constants'

const ADS = () => {
    return (
        <View style={{ backgroundColor: COLORS.Adswhite, padding: 60, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }}>ADS</Text>
        </View>
    )
}

export default ADS
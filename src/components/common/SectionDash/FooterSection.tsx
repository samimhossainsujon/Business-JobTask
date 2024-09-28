import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/constants'

const FooterSection = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', gap: 1, marginBottom: 6, marginTop: 8, }}>
            <View style={{ borderBottomWidth: 2, borderBlockColor: COLORS.white }}></View>
        </View>
    )
}



export default FooterSection
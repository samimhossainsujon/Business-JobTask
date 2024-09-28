import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../components/assets/constants'
import FooterSection from '../../components/common/SectionDash/FooterSection'

const Footer = () => {
    return (
        <View style={{ backgroundColor: COLORS.BGFooter, padding: 5 }}>
            <Text style={{ color: COLORS.white, textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>Business & First Class ​Reviews</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 35, paddingRight: 35, marginTop: 10 }}>
                <Text style={{ color: COLORS.white }}>About</Text>
                <Text style={{ color: COLORS.white }}>FAQ's</Text>
                <Text style={{ color: COLORS.white }}>Terms Of Service</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 35, paddingRight: 35, marginTop: 10, marginBottom: 20 }}>
                <Text style={{ color: COLORS.white }}>privacy policy</Text>
                <Text style={{ color: COLORS.white }}>cookie policy</Text>
                <Text style={{ color: COLORS.white }}>Contact</Text>
            </View>

            <FooterSection />

            <Text style={{ color: COLORS.white, textAlign: 'center', fontWeight: '200', fontSize: 20, }}>©2024 Business & First Class Reviews</Text>
        </View>
    )
}

export default Footer
import { View, Text } from 'react-native'
import React from 'react'
import Footer from '../Footer/Footer'
import ADS from '../ADS/ADS'
import Post from '../Post/Post'
import Search from '../Search/Search'

const Home = () => {
    return (
        <>
            <Search />
            <Post />
            <ADS />
            <Footer />
        </>
    )
}

export default Home
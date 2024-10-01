import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Button, TextInput, Image, ToastAndroid } from 'react-native';
import Footer from '../Footer/Footer';
import ADS from '../ADS/ADS';
import Post from '../Post/Post';
import Search from '../Search/Search';
import Carousel from '../Carousel/Carousel';
import { COLORS } from '../../components/assets/constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
                padding: 5,
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
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedClass, setSelectedClass] = useState('');
    const [travelDate, setTravelDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [rating, setRating] = useState('');

    const handleOpenModal = (type: string) => {
        setModalType(type);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setModalType(null);
    };

    const onDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || travelDate;
        setShowDatePicker(false);
        setTravelDate(currentDate);
    };

    const handleImagePick = () => {
        console.log('Image picked'); 
    };

    const handleSubmit = () => {
        ToastAndroid.show('Submission Successful!', ToastAndroid.SHORT);
        handleCloseModal();
    };

    return (
        <>
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, marginLeft: 20, marginRight: 20, padding: 10 }}>
                    <CustomButton
                        title="Share your experience"
                        onPress={() => handleOpenModal('experience')}
                        iconName="user-friends"
                    />
                    <CustomButton
                        title="Ask a question"
                        onPress={() => handleOpenModal('question')}
                        iconName="user-tie"
                    />
                </View>
                <Search />
                <Carousel />
                <Post />
                <ADS />
            </View>

            {/* Modal Component */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={handleCloseModal}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                }}>
                    <View style={{
                        width: 380,
                        backgroundColor: COLORS.white,
                        padding: 10,
                        borderRadius: 10,
                    }}>
                        <TouchableOpacity
                            onPress={handleCloseModal}
                        >
                            <AntDesign
                                name="close"
                                color={COLORS.black}
                                size={24}
                                style={{
                                    position: 'absolute',
                                    right: 9,
                                    top: '5%',
                                    padding: 10,
                                    borderRadius: 10,
                                    transform: [{ translateY: -20 }],
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>
                            {modalType === 'experience' ? 'Share' : 'Ask a Question'}
                        </Text>

                        {/* Share your experience modal inputs */}
                        {modalType === 'experience' && (
                            <>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <View>
                                        <FontAwesome5
                                            name="user-secret"
                                            color={COLORS.black}
                                            size={30}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', marginTop: 5, color: COLORS.black }}>Dianne Russell</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.imagePicker}>
                                    <MaterialIcons
                                        name="upload-file"
                                        color={COLORS.black}
                                        size={50}
                                    />
                                    <Text>drop your image here or<Text style={{ color: COLORS.background }}> Browse</Text></Text>
                                </TouchableOpacity>

                                <TextInput placeholder="Departure Airport" style={styles.input} />
                                <TextInput placeholder="Arrival Airport" style={styles.input} />
                                <TextInput placeholder="Airline" style={styles.input} />

                                <View
                                    style={{ borderWidth: 0.7, borderRadius: 10, marginTop: 2, marginBottom: 2 }}
                                >
                                    <Picker
                                        selectedValue={selectedClass}
                                        onValueChange={(itemValue) => setSelectedClass(itemValue)}
                                        style={styles.input}
                                    >
                                        <Picker.Item label="Class" value="" />
                                        <Picker.Item label="First" value="first" />
                                        <Picker.Item label="Business" value="business" />
                                        <Picker.Item label="Economy" value="economy" />
                                        <Picker.Item label="Premium Economy" value="Premium-Economy" />
                                    </Picker>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 35 }}>
                                    <View>
                                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
                                            <Text style={{ color: COLORS.black }}>
                                                {travelDate.toLocaleDateString()}
                                            </Text>
                                        </TouchableOpacity>
                                        {showDatePicker && (
                                            <DateTimePicker
                                                value={travelDate}
                                                mode="date"
                                                display="default"
                                                onChange={onDateChange}
                                            />
                                        )}
                                    </View>
                                    <View>
                                        <TextInput
                                            placeholder="Rating (1-5)"
                                            keyboardType="numeric"
                                            style={styles.input}
                                            value={rating}
                                            onChangeText={(text) => {
                                                const numericValue = parseInt(text, 10);
                                                if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 5) {
                                                    setRating(text);
                                                } else if (text === '') {
                                                    setRating('');
                                                }
                                            }}
                                        />
                                    </View>
                                </View>
                            </>
                        )}

                        {/* Ask a question modal inputs */}
                        {modalType === 'question' && (
                            <>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <View>
                                        <FontAwesome5
                                            name="user-secret"
                                            color={COLORS.black}
                                            size={30}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', marginTop: 5, color: COLORS.black }}>Dianne Russell</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.imagePicker}>
                                    <MaterialIcons
                                        name="upload-file"
                                        color={COLORS.black}
                                        size={50}
                                    />
                                    <Text>drop your image here or<Text style={{ color: COLORS.background }}> Browse</Text></Text>
                                </TouchableOpacity>

                                <TextInput placeholder="Write your message"
                                    multiline={true}
                                    style={{
                                        borderWidth: .5,
                                        borderColor: COLORS.black,
                                        borderRadius: 8,
                                        borderTopWidth: 2,
                                        height: 130,
                                        marginVertical: 15,
                                    }}
                                />
                            </>
                        )}

                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                </View>
            </Modal>

            <Footer />
        </>
    );
};

const styles = {
    input: {
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
    imagePicker: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: COLORS.black,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
};

export default Home;

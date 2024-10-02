import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import postData from '../../components/json/post.json';
import ADS from '../ADS/ADS';
import { PostData } from '../../components/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../components/assets/constants';
import StarRating from '../../components/common/StarRating/StarRating';



const Post: React.FC = () => {
    const [data, setData] = useState<PostData[]>([]);

    useEffect(() => {
        setData(postData);
    }, []);

    return (
        <View>
            {data && data.length > 0 ? (
                data.map(post => (
                    <>
                        <View key={post._id} style={{ marginBottom: 20, marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View>
                                        <Image
                                            source={{ uri: post.ProfleImage }}
                                            style={{ width: 50, height: 50, borderRadius: 60 }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                            {post.name}
                                        </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                            1 day ago
                                        </Text>
                                    </View>

                                </View>

                                <View>
                                    <StarRating rating={post.rating} />
                                </View>

                            </View>


                            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5 }}>
                                {post.Tags.map(tag => `#${tag}`).join(' ')}
                            </Text>





                            <Text
                                style={{ marginTop: 10, marginBottom: 10 }}
                            >{post.description}</Text>
                            <Image
                                source={{ uri: post.image }}
                                style={{ width: 380, height: 300 }}
                            />
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Text style={{ fontSize: 20 }}>{post.like} Likes</Text>
                                <Text style={{ fontSize: 20 }}>.</Text>
                                <Text style={{ fontSize: 20 }}>{post.comment} Comments</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25, marginTop: 10, marginBottom: 10 }}>
                                <Text>
                                    <AntDesign name="like1" color={COLORS.background} size={35} />
                                </Text>
                                <Text>

                                    <Fontisto name="share-a" color={COLORS.background} size={35} />
                                </Text>


                            </View>




                            <View style={{ padding: 20, backgroundColor: COLORS.CommentBG, borderRadius: 30 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View>
                                            <Image
                                                source={{ uri: post.commentsImages }}
                                                style={{ width: 40, height: 40, borderRadius: 60 }}
                                            />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                                {post.commentName}
                                            </Text>
                                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                                3 min ago
                                            </Text>
                                        </View>



                                    </View>

                                    <View>
                                        <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 18 }}>{post.upvote} Upvotes</Text>
                                    </View>

                                </View>
                                <Text style={{ marginTop: 10 }}>{post.commentDescription}</Text>


                                <View style={{ flexDirection: 'row', gap: 50, marginTop: 15, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome5 name="angle-double-up" color={COLORS.black} size={35} />
                                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: COLORS.black }}>upvote</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <AntDesign name="wechat" color={COLORS.black} size={35} />
                                        <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: COLORS.black }}>Reply</Text>
                                    </View>
                                </View>

                            </View>
                        </View>

                        <ADS />
                    </>
                ))
            ) : (
                <Text>No posts available</Text>
            )}
        </View>
    );
};

export default Post;

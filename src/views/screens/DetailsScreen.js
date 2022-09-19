import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const { width } = Dimensions.get('screen');

const DetailsScreen = ({ navigation, route }) => {
    const house = route.params;
    const InteriorImage = ({ image }) => {
        return <Image source={image} style={style.interiorImage} />
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={style.backgroundImageContainer}>
                    <ImageBackground
                        style={style.backgroundImage}
                        source={house.image}>
                        <View style={style.header}>
                            <View style={style.headerBtn}>
                                <Icon name="arrow-back-ios"
                                    size={20}
                                    onPress={navigation.goBack} />
                            </View>
                            <View style={style.headerBtn}>
                                <Icon name="favorite" size={20} color={COLORS.red} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={style.virtualTag}>
                        <Text style={{ color: COLORS.white }}>Virtual tour</Text>
                    </View>
                </View>
                <View style={style.detailsContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {house.title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={style.ratingTag}>
                                <Text style={{ color: COLORS.white }}>4.8</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginLeft: 5 }}>155 ratings</Text>
                        </View>
                    </View>
                    <Text style={{ color: COLORS.grey, fontSize: 16 }}>{house.location}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', marginTop: 5 }}>
                        <View style={style.facility}>
                            <Icon name="hotel" size={18} />
                            <Text style={style.facilityText}>2</Text>
                        </View>
                        <View style={style.facility}>
                            <Icon name="bathtub" size={18} />
                            <Text style={style.facilityText}>2</Text>
                        </View>
                        <View style={style.facility}>
                            <Icon name="aspect-ratio" size={18} />
                            <Text style={style.facilityText}>100m area</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: COLORS.grey }}>
                        {house.details}
                    </Text>
                    <FlatList
                    keyExtractor={(_, key) => key.toString()}
                    contentContainerStyle={{marginTop: 20}}
                     horizontal
                        showsHorizontalScrollIndicator={false}
                        data={house.interiors}
                        renderItem={({ item }) => <InteriorImage image={item} />}
                    />
                    <View style={style.footer}>
                        <View>
                            <Text style={{color: COLORS.blue, fontWeight: 'bold', fontSize: 18}}>$1,500</Text>
                            <Text style={{color: COLORS.grey, fontWeight: 'bold', fontSize: 12}}>Total Price</Text>
                        </View>
                        <View style={style.bookNowBtn}>
                            <Text style={{color: COLORS.white}}>Book Now</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    virtualTag: {
        top: -20,
        width: 120,
        backgroundColor: COLORS.dark,
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facility: {
        flexDirection: 'row',
        marginRight: 15
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey,
    },
    interiorImage: {
        width: width / 3 - 20,
        height: 80,
        marginRight: 10,
        borderRadius: 10

    },
    footer:{
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal:  20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookNowBtn:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        paddingHorizontal: 20  
    }
});

export default DetailsScreen
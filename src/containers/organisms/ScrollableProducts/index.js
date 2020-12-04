import React, { Component } from 'react'
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native'

class ScrollableProducts extends Component {
    render() {
        return (
            <View>
                <View style={{height: 15, width: 60, marginLeft: -4, marginLeft: 16}} >
                    <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurants</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
                </View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
                    <View style={{marginRight: 16}}>
                        <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                            <Image source={require('../../../assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                        </View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>KFC Aeon Mall</Text>
                    </View>
                    <View style={{marginRight: 16}}>
                        <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                            <Image source={require('../../../assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                        </View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Bakmi GM Aeon Mall</Text>
                    </View>
                    <View style={{marginRight: 16}}>
                        <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                            <Image source={require('../../../assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                        </View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Martabak Orins</Text>
                    </View>
                    <View style={{marginRight: 16}}>
                        <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                            <Image source={require('../../../assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                        </View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Martabak Banka</Text>
                    </View>
                    <View style={{marginRight: 16}}>
                        <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                            <Image source={require('../../../assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                        </View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Ayam Bakar Pak Boss</Text>
                    </View>
                </ScrollView>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16, marginHorizontal: 16, marginBottom: 20}}></View> 
            </View>
        )
    }
}

export default ScrollableProducts;

const styles = StyleSheet.create({})

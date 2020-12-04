import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import GoBanner from './src/components/moleculs/GoBanner';
import GoInfo from './src/components/moleculs/GoInfo';
import GoNews from './src/components/moleculs/GoNews';
import GopayFeature from './src/components/moleculs/GopayFeature';
import MainFeature from './src/components/moleculs/MainFeature';
import SearchFeature from './src/components/moleculs/SearchFeature';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        {/* Search bar */}
        <SearchFeature />

        {/* Gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fbb', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
            <Image source={require('./src/assets/icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 67.568.000</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
            <GopayFeature img={require('./src/assets/icon/pay.png')} title="Pay" />
            <GopayFeature img={require('./src/assets/icon/nearby.png')} title="Nearby" />
            <GopayFeature img={require('./src/assets/icon/topup.png')} title="Top Up" />
            <GopayFeature img={require('./src/assets/icon/more.png')} title="More" />
          </View>
        </View>

        {/* Main Feature */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            <MainFeature img={require('./src/assets/icon/go-ride.png')} title="GO-RIDE" />
            <MainFeature img={require('./src/assets/icon/go-car.png')} title="GO-CAR" />
            <MainFeature img={require('./src/assets/icon/go-bluebird.png')} title="GO-BLUEBIRD" />
            <MainFeature img={require('./src/assets/icon/go-send.png')} title="GO-SEND" />
            <MainFeature img={require('./src/assets/icon/go-deals.png')} title="GO-DEALS" />
            <MainFeature img={require('./src/assets/icon/go-pulsa.png')} title="GO-PULSA" />
            <MainFeature img={require('./src/assets/icon/go-food.png')} title="GO-FOOD" />
            <MainFeature img={require('./src/assets/icon/go-more.png')} title="MORE" />
          </View>
        </View>

        {/* Line Horizontal */}
        <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>

        {/* News Section */}
        <GoNews />

        {/* Internal information section */}
        <GoInfo />

        {/* Go food banner section */}
        <GoBanner />

        {/* Nearby Go food */}
        <ScrollableProducts />

      </ScrollView>

      {/* Navigation */}
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/home-active.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43ab4a'}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/order.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/help.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/inbox.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/account.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
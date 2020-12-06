import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import GopayFeature from '../../../components/moleculs/GopayFeature';

class HomeGopay extends Component {
    render() {
        return (
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fbb', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
            <Image source={require('../../../assets/icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 67.568.000</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
            <GopayFeature img={require('../../../assets/icon/pay.png')} title="Pay" />
            <GopayFeature img={require('../../../assets/icon/nearby.png')} title="Nearby" />
            <GopayFeature img={require('../../../assets/icon/topup.png')} title="Top Up" />
            <GopayFeature img={require('../../../assets/icon/more.png')} title="More" />
          </View>
        </View>
        )
    }
}

export default HomeGopay;
import React, { Component } from 'react';
import { View } from 'react-native';
import MainFeature from '../../../components/moleculs/MainFeature';

class HomeMainFeature extends Component {
    render() {
        return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            <MainFeature img={require('../../../assets/icon/go-ride.png')} title="GO-RIDE" />
            <MainFeature img={require('../../../assets/icon/go-car.png')} title="GO-CAR" />
            <MainFeature img={require('../../../assets/icon/go-bluebird.png')} title="GO-BLUEBIRD" />
            <MainFeature img={require('../../../assets/icon/go-send.png')} title="GO-SEND" />
            <MainFeature img={require('../../../assets/icon/go-deals.png')} title="GO-DEALS" />
            <MainFeature img={require('../../../assets/icon/go-pulsa.png')} title="GO-PULSA" />
            <MainFeature img={require('../../../assets/icon/go-food.png')} title="GO-FOOD" />
            <MainFeature img={require('../../../assets/icon/go-more.png')} title="MORE" />
          </View>
        </View>
        )
    }
}

export default HomeMainFeature;
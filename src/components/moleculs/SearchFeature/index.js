import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { Constants } from 'react-native-unimodules';

const SearchFeature = () => {
    return (
        <View style={{paddingTop: Constants.statusBarHeight, marginHorizontal: 17, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
            <Image source={require('../../../assets/icon/search.png')} style={{position: 'absolute', top: 5, left: 12}} />            
          </View>
          <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../../assets/icon/promo.png')} />
          </View>
        </View>
    )
}

export default SearchFeature;

const styles = StyleSheet.create({})

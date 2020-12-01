import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Constants } from 'react-native-unimodules';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <View style={{flex: 1, backgroundColor: 'white'}}>

        {/* Search bar */}
        <View style={{paddingTop: Constants.statusBarHeight, marginHorizontal: 17, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
            <Image source={require('./icon/search.png')} style={{position: 'absolute', top: 5, left: 12}} />            
          </View>
          <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/promo.png')} />
          </View>
        </View>

        {/* Gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fbb', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
            <Image source={require('./icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 1.568.000</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/pay.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Pay</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/nearby.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Nearby</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/topup.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Top Up</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/more.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>More</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Navigation */}
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./icon/home-active.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43ab4a'}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./icon/order.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./icon/help.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./icon/inbox.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={require('./icon/account.png')} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
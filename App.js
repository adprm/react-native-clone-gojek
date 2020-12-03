import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'react-native-unimodules';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

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
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 22.568.000</Text>
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

        {/* Main Feature */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-car.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-bluebird.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-send.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-deals.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-pulsa.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-food.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1,borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/go-more.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
            </View>
          </View>
        </View>

        {/* Line Horizontal */}
        <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>

        {/* News Section */}
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadiusL: 6}}></View>
            <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}} >
              <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a', marginBottom: 11}}>Dimas Drajat selamatkan penalti, Timnas u-23 Kalahkan Brunei.</Text>
            <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Internal information section */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <View style={{height: 15, width: 60, marginLeft: -4}} >
            <Image source={require('./logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
          </View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image source={require('./dummy/facebook-connect.png')} />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text style={{fontSize: 15, color: '#4a4a4a', fontWeight: 'bold'}}>Connect with Facebook</Text>
              <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%'}}>Log in faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16}}></View> 
        </View>

        {/* Go food banner section */}
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadiusL: 6}}></View>
            <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}} >
              <Image source={require('./logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD vouchers</Text>
                <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>Quick, before they run out</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16}}></View> 
        </View>

      </ScrollView>

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
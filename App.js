import React from 'react';
import { View, ScrollView } from 'react-native';
import GoBanner from './src/components/moleculs/GoBanner';
import GoInfo from './src/components/moleculs/GoInfo';
import GoNews from './src/components/moleculs/GoNews';
import SearchFeature from './src/components/moleculs/SearchFeature';
import HomeGopay from './src/containers/organisms/HomeGopay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import NavBar from './src/containers/organisms/NavBar';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        {/* Search bar */}
        <SearchFeature />

        {/* Gopay */}
        <HomeGopay />

        {/* Main Feature */}
        <HomeMainFeature />

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
      <NavBar />

    </View>
  );
}
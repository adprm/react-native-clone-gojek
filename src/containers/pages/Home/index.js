import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import GoBanner from '../../../components/moleculs/GoBanner';
import GoInfo from '../../../components/moleculs/GoInfo';
import GoNews from '../../../components/moleculs/GoNews';
import SearchFeature from '../../../components/moleculs/SearchFeature';
import HomeGopay from '../../organisms/HomeGopay';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import NavBar from '../../organisms/NavBar';
import ScrollableProducts from '../../organisms/ScrollableProducts';

class Home extends Component {
    render() {
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
                    <GoNews onPress={() => this.props.navigation.navigate('News Detail')} />
            
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
        )
    }
}

export default Home;
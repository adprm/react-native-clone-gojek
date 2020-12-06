import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBarIcon from '../../../components/moleculs/NavBarIcon';

class NavBar extends Component {
    render() {
        return (
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
            <NavBarIcon img={require('../../../assets/icon/home-active.png')} title="Home" active />
            <NavBarIcon img={require('../../../assets/icon/order.png')} title="Orders" />
            <NavBarIcon img={require('../../../assets/icon/help.png')} title="Help" />
            <NavBarIcon img={require('../../../assets/icon/inbox.png')} title="Inbox" />
            <NavBarIcon img={require('../../../assets/icon/account.png')} title="Account" />
        </View>
        )
    }
}

export default NavBar;

const styles = StyleSheet.create({})

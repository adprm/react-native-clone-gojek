import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const GopayFeature = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={props.img} />
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center'}}>{props.title}</Text>
        </View>
    )
  }

export default GopayFeature;

const styles = StyleSheet.create({});

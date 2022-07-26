import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';

export class Icon extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
              <Image source={{
                  uri:'https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi'
              }} style={{width: 50, height: 50}} />

          </View>
          <View style={styles.box}>
              <Image source={{
                  uri:'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi'
              }} style={{width: 50, height: 50}} />

          </View>
          <View style={styles.box}>
              <Image source={{
                  uri:'https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi'
              }} style={{width: 50, height: 50}} />

          </View>
          <View style={styles.box}>
              <Image source={{
                  uri:'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi'
              }} style={{width: 50, height: 50}} />

          </View>
          <View style={styles.box}>
              <Image source={{
                  uri:'https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi'
              }} style={{width: 50, height: 50}} />

          </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
       
        backgroundColor: '#f8f8f8',
        height: 100,
       borderWidth: 1,
       borderColor: '#e5e4e4'
    },
    box:{
       
    },

    
})

export default Icon;

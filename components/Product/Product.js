

import React from 'react';
import {  View, Text, StyleSheet, Image  } from 'react-native'

const Product = ({image, text, pice, discount}) => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.discount}>
            <Text style={{color: 'red', fontSize: 17, textAlign: 'center'}}>{discount}</Text>
          </View>
          <Image source={image} style={styles.img} />
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.pice}>{pice}</Text>
        </View>
        
    </View>
  )
};


const styles = StyleSheet.create({
    container:{
       
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
        width: 220,
        height: 250
     
    },
    box:{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'


    
    },
    img:{
        width: 100,
        height: 100,
    },
    text:{
      fontSize: 20,
      color: "black",


    },

    pice: {
      color: 'red',
    },

    discount:{
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 0,
        left: 120,
        width: 40,
        height: 30,
        zIndex: 1,


    },
})

export default Product

import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import CATEGOTY from "../data/category";
import CATEGOTY2 from "../data/category";
const Danhmuc = ({props}) => {
  
       
    return (
    <View style={styles.container}>
        <View style={{borderBottomWidth: 2, borderColor: '#e5e4e4', padding: 10}}>
           <Text style={{color: '#aaaba7', paddingLeft: 10, padding: 10, fontSize: 15}}>DANH MỤC</Text>
        </View>
       
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
                <View>
                        {/* Dòng 1 */}
                         <View style={styles.box}>
                                {CATEGOTY.slice(0,6).map((item) =>(
                                        <TouchableOpacity onPress={() => props.navigation.navigate('ProductScreen',{ categoryId : item.id})}
                                        key={item.id}>
                                                <View style={styles.item}>
                                                        <Image style={styles.img} source={{ uri: item.img}} />
                                                        <Text style={styles.text}>{item.name}</Text>
                                                </View>
                                        </TouchableOpacity>
                                        
                                ))}
                         </View>
                         
                         {/* Dòng 2 */}
                         <View style={styles.box}>
                                {CATEGOTY.slice(7,13).map((item) =>(
                                         <TouchableOpacity onPress={() => props.navigation.navigate('ProductScreen',{ categoryId : item.id})}
                                         key={item.id}>
                                                <View style={styles.item}>
                                                        <Image style={styles.img} source={{ uri: item.img}} />
                                                        <Text style={styles.text}>{item.name}</Text>
                                                </View>
                                        </TouchableOpacity>
                                ))}
                         </View>
                </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        height: 'auto',
        backgroundColor: '#f8f8f8',
       borderWidth: 1,
       borderColor: '#e5e4e4',
       
        
    },
    box:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
      
    },

    item:{
        
        width: 150,
        display: 'flex',
        alignItems: 'center',
    },

    img:{
        width: 70,
        height: 70,
    },

    text:{
        
    }
})

export default Danhmuc;

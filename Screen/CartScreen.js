import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from "react-native";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';



import { useSelector, useDispatch } from "react-redux";

const CartScreen = ({navigation}) => {

  const cartProduct = useSelector((state) => state.cartItem)
  const dispatch = useDispatch()
  return(
    <SafeAreaProvider>
         <View style={styles.container}>
           {/* header */}
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                      <Feather name="menu" size={24} color="black" />
                    </TouchableOpacity>
                    {/* search bar */}
                    <TextInput 
                      style={styles.input}
                      placeholder="useless placeholder"
                      placeholderTextColor="#be91e8"
                      />
                      {/* Avatar */}
                      <Image source={require('../image/thanhthao.jpg')} style={styles.img}/>
                </View>
            {/* Product */}
                {cartProduct.length == 0 ? (
                    <View style={{marginTop: 200, height: 100, borderWidth: 2, backgroundColor: 'white'}}>
                      <Text style={{textAlign: 'center', fontSize: 20}}>Giỏ Hàng Trống</Text>
                    </View>
                ):
                (
                <SafeAreaView>
                  <View style={{marginTop: 100, borderWidth: 2, height: 400, backgroundColor: 'white'}}>
                    <FlatList
                      data={cartProduct}
                      renderItem={({item}) =>(
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-around',
                        alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{ productId : item.id})}>
                              <Image source={item.img} style={{width: 100, height: 70}} />
                            </TouchableOpacity>
                              
                              <View>
                                <Text>{item.caption}</Text>
                                <Text>{item.pice}</Text>
                              </View>

                              {/* trash */}
                            <TouchableOpacity onPress={() => {
                                  dispatch(
                                  {
                                  //  Tên action và tham số truyền
                                  type: 'THEM_CART',
                                  productId: item.id
                                }
                              ); 
                                navigation.navigate('FavStack');
                              }} >
                              <Feather name="trash" size={24} color="black" />
                            </TouchableOpacity>
                              
                        </View>
                      )} 
                      keyExtractor={(item) => item.id}
    
                    />
                      {/* CheckOut */}
                      <View style={{flexDirection: 'row',  justifyContent: 'flex-end', marginRight: 40, 
                        marginBottom: 40, marginTop: 20}}>
                          <TouchableOpacity style={{padding: 20,backgroundColor: "#06b6d4", marginRight: 20
                          ,borderRadius: 10}}>
                              <Text style={{color: "white", textAlign: 'center'}}>Thanh Toán</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => props.navigation.navigate('HomeStack')}
                          style={{padding: 20,backgroundColor: "#fde047", borderRadius: 10}}>
                              <Text style={{color: "#2d334a", textAlign: 'center'}}>Trở Về</Text>
                          </TouchableOpacity>
                      </View>
                    </View>
                  </SafeAreaView>
                )}
         </View>
    </SafeAreaProvider>
  )
  
};

const styles = StyleSheet.create({
  container:{
    position: "relative",
    textAlign: 'center',
    maxWidth: "100%",
  },
  box:{
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#9333ea',
    width: "100%",
    position: "absolute",
    zIndex: 20, 
    paddingTop:30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#be91e8",
    color: "white"
  },

  img:{
    width: 50,
    height: 50,
    borderRadius: 100,
  },

 
})

export default CartScreen
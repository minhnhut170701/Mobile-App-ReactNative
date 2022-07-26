import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import {View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";


import { useSelector, useDispatch } from "react-redux";
const FavScreen = (props) => {
   const favProduct = useSelector((state) => state.favItem)
  
  const dispatch = useDispatch()

  return(
    <SafeAreaProvider>
         <View style={styles.container}>
           {/* Header */}
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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
                {favProduct.length == 0 ? (
                    <View style={{marginTop: 200, height: 100, borderWidth: 2, backgroundColor: 'white'}}>
                      <Text style={{textAlign: 'center'}}>Khong có sản phảm yeu thích</Text>
                    </View>
                ):
                (
                <SafeAreaView>
                  <View style={{marginTop: 100, borderWidth: 2, height: 400, backgroundColor: 'white'}}>
                    <FlatList
                      data={favProduct}
                      renderItem={({item}) =>(
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-around',
                        alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen',{ productId : item.id})}>
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
                                  type: 'THEM_FAV',
                                  productId: item.id
                                }
                              ); 
                                props.navigation.navigate('FavStack');
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

export default FavScreen
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Product from "../data/item";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

//icon
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
const DetailScreen = (props) => {

  const { productId }  = props.route.params
  // get item from products state
  const availableProduct = useSelector((state) => state.products)
  const product = availableProduct.find(item => item.id === productId)

  //  get favItem and cartItem
  const favProduct = useSelector((state) => state.favItem)
  const cartProduct = useSelector((state) => state.cartItem)

  // check Item
  const isFav = favProduct.some(product => product.id == productId)
  const isCart = cartProduct.some(product => product.id == productId)


  // sử dụng dispatch truyền action
  const dispatch = useDispatch()

  useEffect(() =>{
    props.navigation.setOptions({
      headerRight:() => (
        <View style={styles.header}>
          {isFav == true ?(
              <TouchableOpacity onPress={() => {
                dispatch(
                {
                 //  Tên action và tham số truyền
                 type: 'THEM_FAV',
                 productId: productId
               }
             ); 
               props.navigation.navigate('FavStack');
             }}>
                 <AntDesign name="star" size={24} color="black" />
             </TouchableOpacity>
          ):
            <TouchableOpacity onPress={() => {
              dispatch(
              {
              //  Tên action và tham số truyền
              type: 'THEM_FAV',
              productId: productId
            }
          ); 
            props.navigation.navigate('FavStack');
          }}>
              <AntDesign name="staro" size={24} color="black" />
          </TouchableOpacity>
          }
           
        </View>
       
      )
    })

  }, [props.navigation, favProduct])

    return (
      <SafeAreaProvider>
        <ScrollView>
            <View style={styles.container}>
              <Image source={product.img} style={styles.image}/>

              <View style={styles.contaiInfor}>  
                <View style={styles.price}>
                    <Text style={styles.text}>{product.caption}</Text>
                    <Text style={styles.discount}>{product.discount} GIẢM</Text>
                </View> 

                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text style={styles.pice}>{product.pice}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star-outlined" size={24} color="gray" />
                  </View>
                </View>
                {isCart ? (
                    <TouchableOpacity onPress={() => 
                      dispatch(
                          {
                          //  Tên action và tham số truyền
                            type: 'THEM_CART',
                            productId: productId
                        }
                      )
                    }
                    style={{marginTop: 20}}>
                      <Ionicons name="cart" size={50} color="black" />
                    </TouchableOpacity>
                ):
                    <TouchableOpacity onPress={() => 
                      dispatch(
                          {
                          //  Tên action và tham số truyền
                            type: 'THEM_CART',
                            productId: productId
                        }
                      )
                    }
                    style={{marginTop: 20}}>
                      <Ionicons name="cart-outline" size={50} color="black" />
                    </TouchableOpacity>
                
                }
                
                
               
              </View>

              
            </View>
        </ScrollView>
        
      </SafeAreaProvider>
      
    )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flexDirection: 'column',
    width: "100%",
    marginRight: 'auto',
    marginLeft: 'auto',
    height: "auto",
    justifyContent: 'center'
  },

  header:{
    marginRight: 50,
  },

  image:{
    width: "100%", 
    height: 300,
    marginTop: 50,
    
  },

  contaiInfor:{
    borderWidth: 2,
    borderColor: "gray",
    margin: 20,
    width: "100%",
    padding: 20,
    backgroundColor: 'white'
  },

  text:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
    color: 'black',

  },

  price:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  discount:{
    width: 50,
    height: 40,
    color: "red",
    backgroundColor: 'yellow',
    textAlign: 'center'
  },

  pice:{
    fontSize: 18,
    fontWeight: "700",
    color: 'red',
   paddingTop: 20,
  }

})

export default DetailScreen;
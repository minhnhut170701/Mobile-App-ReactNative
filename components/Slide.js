import React from 'react';

import {StyleSheet, View, Text,  Dimensions, ScrollView, Image} from 'react-native'
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { Box, Flex, Spacer } from 'native-base';


const images = [
    {id: 1,img: 'https://cf.shopee.vn/file/a551eb67da77abf5ad11f4268417a7cd'},
    {id: 2,img: 'https://cf.shopee.vn/file/ae7ca409473e23f815717ba3a4fb78eb'},
    {id: 3,img: 'https://cf.shopee.vn/file/4b8d4c1b1969833c9b02843e1ba6eb04'},
    {id: 4,img: 'https://cf.shopee.vn/file/2f4785e8c024715bbdf01f0f2d809964'},

]

const {width} = Dimensions.get('window')
const height = width * 0.6;
const Slide = () => {
  return (
      <View style={{marginTop: 0, width}}>
        <Box style={{display: 'flex', alignItems: 'center'}} 
        bg='muted.100'>
            <Flex direction='row' justifyContent='center'
                alignItems='center' w={300}  mt={10} mb={10} >
                <Entypo name="shopping-cart" size={30} color="black" />
                    <Spacer/>
                <Feather name="credit-card" size={30} color="black" />
                    <Spacer/>
                <AntDesign name="addusergroup" size={30} color="black" />
                    <Spacer/>
                <AntDesign name="gift" size={30} color="black" />
            </Flex>
        </Box>
        <ScrollView
         horizontal
         pagingEnabled 
        showsHorizontalScrollIndicator={false}
        style={{}}>
            {images.map((item) => (
                <Image
                key={item.id}
                source={{uri: `${item.img}`}}
                resizeMethod="resize"
                style={{width, height, resizeMode: 'stretch'}}
                />
            ))}
        </ScrollView>
      </View>
    
  )
    
};

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})
export default Slide;

import React, {useState} from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput, Switch} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useDispatch } from "react-redux";
const FillTabScreen = ({navigation}) => {

    const [isNew, setIsNew] = useState(false);
    const [isSale, setIsSale] = useState(false);

  const dispatch = useDispatch()
  const fillter ={
    isItemNew: isNew,
    isItemSale: isSale
  }

  const callDispath = () =>{
    dispatch({type: 'LOC_SAN_PHAM', fillters: fillter})
  }
  const backHome = () =>{
     navigation.navigate('ShowTabScreen')
  }

  const Combined = () =>{
    callDispath()
    backHome()
  }

  return (
    <View style={styles.container}>
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

        <View style={styles.fill}>
            <Text style={{margin: 10, fontSize: 20, fontWeight: '700', color: '#ef4444', textTransform: 'uppercase'}}>Chọn bộ lọc</Text>
            <View style={styles.view}>
                <Text >Hàng Mới</Text>
                <Switch style={styles.switch}
                value={isNew}
                onValueChange={(newValue) => setIsNew(newValue)}
                />
            </View>
            <View style={styles.view}>
                <Text >Khuyến Mãi</Text>
                <Switch style={styles.switch}
                value={isSale}
                onValueChange={(newValue) => setIsSale(newValue)} />
            </View>

            <View style={{padding: 20, flexDirection:'row', justifyContent: 'flex-end',}}>
              <TouchableOpacity onPress={() => Combined() }
              style={{padding: 20, backgroundColor: '#67e8f9'}}>
                <Feather name="save" size={24} color="white" />
              </TouchableOpacity>
            </View>
           
        </View>
    </View>
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
      color: "white",
      
    },
  
    img:{
      width: 50,
      height: 50,
      borderRadius: 100
    },
  
    fill:{
        marginTop: 120,
        borderColor: 'gray',
        borderWidth: 4,
        backgroundColor: 'white'
   },

   view:{
       margin: 10,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       borderBottomWidth: 2,
       borderColor: 'blue'

   },

   switch:{
      transform: [{scaleX: 1.3}, {scaleY: 1.3}],
   }
  })

export default FillTabScreen
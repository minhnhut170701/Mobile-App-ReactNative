import React, {useEffect, useState} from 'react';
import { FlatList, Image, View, Text, TouchableOpacity, StyleSheet, TextInput,
   SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import PRODUCTS from "../data/item";
import { Feather } from '@expo/vector-icons';


import { useSelector } from "react-redux";

const ShowTabScreen = (props) => {
  const [search, setSearch] = useState('')
  const [fillte, setFillte] = useState([])

 
  const availableProduct = useSelector((state) => state.fillItem)
 

  useEffect(() =>{
    setFillte(availableProduct)
   
  }, [availableProduct])

  const searchFilter = (text) =>{
    if(text){
      const newData = availableProduct.filter((item) =>{
        const itemData = item.caption ? item.caption.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      setFillte(newData);
      setSearch(text)
   
    }
    else{
      setFillte(availableProduct)
      setSearch(text)
    }
  }



  return (
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
                value={search}
                onChangeText={(text) => searchFilter(text)}
                placeholderTextColor="#be91e8"
                />
                {/* Avatar */}
                <Image source={require('../image/thanhthao.jpg')} style={styles.img}/>
            </View>
            
            {/* Product */}
            <View style={styles.productBox}>
                <FlatList
                  data={fillte}
                  renderItem={({item}) =>(
                      <View style={styles.productItem}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen',{ productId : item.id})}>
                          <Image source={item.img}  style={{width: 100, height: 100}}/>
                        </TouchableOpacity>
                          
                          <View>
                            <Text style={{textAlign: 'left', paddingLeft: 30, fontSize: 20, fontWeight: 'bold'}}>{item.caption}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                              <Text style={{textAlign: 'left', paddingLeft: 30, color: 'red', fontSize: 15}}>{item.discount}</Text>
                              <Text style={{textAlign: 'left', paddingLeft: 30}}>{item.pice}</Text>
                            </View>
                            
                          </View>
                          
                      </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
            </View>
            
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

  productItem: {
    width: "60%",
    marginTop: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
     marginLeft: 20
  },

  productBox: {
    backgroundColor: 'white',
    marginTop: 50,
  },
})

export default ShowTabScreen
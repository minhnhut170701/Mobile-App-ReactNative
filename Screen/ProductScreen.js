import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PRODUCTS from "../data/item"
import { useSelector } from "react-redux";
const ProductScreen = (props) => {
  const { categoryId } = props.route.params
  console.log(categoryId)

  const availableProduct = useSelector((state) => state.fillItem)

  const products = availableProduct.filter(item => item.categoryId == categoryId)
  
    return (
      <SafeAreaProvider>
           <View style={styles.productBox}>
                <FlatList
                  data={products}
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
      </SafeAreaProvider>
     
    )
};

const styles = StyleSheet.create({
  
  
  

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
   
  },
})

export default ProductScreen;
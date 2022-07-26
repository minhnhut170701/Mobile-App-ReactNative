import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from "react-native";

import Product from './Product';
import PRODUCTS from "../../data/item";


const Products = ({props}) => {


  return (
    <View style={styles.container}>
        <View style={{borderBottomWidth: 2, borderColor: '#e5e4e4', display: 'flex', alignItems: 'center', flexDirection: 'row',padding: 10}}>
          <Text style={{color: '#ee4e2e', paddingLeft: 10, padding: 10, fontSize: 17}}>Flash SALE</Text>
          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{color: 'white', backgroundColor: '#333', fontSize: 15,
                width: 40, height: 40 , textAlign: 'center', paddingTop: 8, marginRight: 10}}>
                    01</Text>
                <Text style={{color: 'white', backgroundColor: '#333',fontSize: 15,
                width: 40, height: 40, textAlign: 'center', paddingTop: 8, marginRight: 10}}>
                    45</Text>
                <Text style={{color: 'white', backgroundColor: '#333',fontSize: 15,  
                width: 40, height: 40, textAlign: 'center', paddingTop: 8, marginRight: 10}}>
                    24</Text>
          </View>   
           
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
                {PRODUCTS.map((item) =>(
                    <TouchableOpacity key={item.id}
                    onPress={() => props.navigation.navigate('DetailScreen',{ productId : item.id})}>
                        <Product image={item.img} 
                        text={item.caption} 
                        pice={item.pice}
                        discount={item.discount} />
                    </TouchableOpacity>
                    
                ))}
            
            
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
        backgroundColor: '#f8f8f8',
       borderWidth: 1,
       borderColor: '#e5e4e4',
    },
    img:{

    },
    text:{

    },
})

export default Products
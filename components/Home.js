
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { NativeBaseProvider, Box, ScrollView , VStack, Skeleton, Center} from "native-base";
import Header from './Header';
import Slide from './Slide';
import Products from '../components/Product/Products';
import PRODUCTS from "../data/item";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from './Icon';
import Danhmuc from './Danhmuc';
import { useEffect, useState } from 'react';


const delay = 3;
export default function Home(props, {navigation}) {
    const [loading, setLoading] = useState(false);
    

    useEffect(() =>{
      let timer1 = setTimeout(() => setLoading(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    }, [])
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        {loading == true ? (
          <>
            <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: '#f3f3f3'}}>

            <Header props={props} />
            <Slide />
            <Icon />
            <Danhmuc props={props} />
            {/* Products */}
            <Products props={props}/>
            {/* End products */}

            </ScrollView>
          </>
        ) : (
          <Center w='100%' h='500'>
              <VStack w="100%" maxW="450" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
            borderColor: "coolGray.200"
          }} _light={{
            borderColor: "coolGray.400"
          }}>
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton px="4" my="4" rounded="md" startColor="primary.400" />
            </VStack>
          </Center>
          
        )}
          
      </NativeBaseProvider>
     
      </SafeAreaProvider>
  );
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
});

import React from 'react';
import { Box, useDisclose, IconButton, Stagger, HStack, Icon, Center, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
const Example = () => {
    const {
      isOpen,
      onToggle
    } = useDisclose();
    return <Box>
        <Box alignItems="center">
          <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true 
            }
          }
        }} exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="location-pin" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="microphone" color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="video" color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="photo-library" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
          </Stagger>
        </Box>
        <HStack justifyContent="center">
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
          color: "warmGray.50"
        }} />} />
        </HStack>
      </Box>;
  };

const Snack = () => {
  return(
    <NativeBaseProvider>
     
        <Center flex={1} px="2" 
        style={{position: 'absolute',
        height: 50, width: 50,
         bottom: 150,left: 300, marginTop: 100, zIndex: 1}}>
             <Example />
        </Center>
       
    </NativeBaseProvider>
  )
};

export default Snack;

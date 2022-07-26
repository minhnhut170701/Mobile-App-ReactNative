import React, { useState } from 'react'
import { Flex, Box,
  VStack, Input, Icon, Avatar} from "native-base";
import {TouchableOpacity} from "react-native"
import {  MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';



const Header = ({props}) => { 
  return (
    <Box safeArea bg='purple.600'>
      <Flex direction='row' mb='2.5' mt='1.5' alignItems='center' justifyContent='space-around'>
        {/* Menu */}
        <Box alignItems='flex-start' ml='2'>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </Box>

          {/* search bar */}
          <VStack w="50%" space={5} alignSelf="center">
          <Input placeholder="Search People & Places"
           width="100%" borderRadius="4" py="3" px="1" 
           fontSize="14" 
           InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" 
            as={<MaterialIcons name="search" />} />} 
            InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" 
            as={<MaterialIcons name="mic" />} />} />
          </VStack>
         
          {/* Avatar */}
          <Avatar bg="green.500" source={require('../image/thanhthao.jpg')}>
        AJ
      </Avatar>
      </Flex>
    </Box>
  )
}

export default Header

import { Text, View, StyleSheet } from 'react-native';
import React, { Component, useState } from 'react';
import { Box, Flex, Modal, FormControl, Input, Button} from 'native-base';
import { Entypo, AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';


const TabBottom = () => {
  
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(false);
    return (
      <Box bg='purple.600'>
        <Flex direction='row' mb='2.5' mt='1.5' alignItems='center' justifyContent='space-around'>
          {/* Home */}
          <View style={styles.box}>
            <Entypo name="home" size={35} color="white" />
            <Text style={{color: 'white'}}>Home</Text>
          </View>
          {/* Search */}
          <View style={styles.box}>
            <FontAwesome name="search" size={35} color="white" />
            <Text style={{color: 'white'}}>Search</Text>
          </View>
          {/* cart */}
          <View style={styles.box}> 
          <FontAwesome5 name="shopping-cart" size={35} color="white" />
            <Text style={{color: 'white'}}>Cart</Text>
          </View>


          {/* Account */}
          <View style={styles.box}>
            {/* Icon */}
          <Button  onPress={() => setShowModal(true)} variant='unstyled' >
            <FontAwesome name="user" size={35} color="white" />
          </Button>
          {/* Modal */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input onChange={() => setValue(true)} />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input onChange={() => setValue(true)} />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setShowModal(false);
                    setValue(false)
                  }}>
                      Cancel
                    </Button>
                    {/* xét value */}
                    {value == true ? (<Button
                    onPress={() => {
                      setShowModal(false);
                      setValue(false)
                    }}>
                      Save
                    </Button>) : (<Button  isDisabled
                    onPress={() => {
                      setShowModal(false);
                      setValue(false)
                    }}>
                      Save
                    </Button>)}
                    
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
          </Modal>
          <Text style={{color: 'white'}}>Account</Text>
          </View>
        </Flex>
      </Box>
    );
  
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center'
  }
})

export default TabBottom;

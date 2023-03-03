import { Text, View ,ImageBackground} from 'react-native';
import React, { Component } from 'react';
import styles from "./styles";
import StyledButton from "../StyledButton";
import Header from '../Header';

const CarItem = ({car}) => {
  console.log(car);
  const handleButtonPress = (type) => { 
    
    type === "custom" ? 
    console.warn("Custom Order was pressed."):
    console.warn("Existing Inventory was pressed.");
    
  }
  return (
      <View style={styles.carContainer}>

        
              
              <ImageBackground 

              source={car.image}
              style={styles.image}>
        
              </ImageBackground>

          <View style={styles.titles}>

            <Text style={styles.title}>{car.name}</Text>
            <Text style={styles.subtitle}>{car.tagline} <Text style={styles.taglineCTA}>{car.taglineCTA}</Text> </Text>
          </View>

        <View style={styles.buttonContainer}>
        <StyledButton 
         type="primary"
         content={"Custom Order"}
         onPress={() => handleButtonPress("custom")}
         />

        <StyledButton 
         type="secondary"
         content={"Existing Inventory"}
         onPress={() => handleButtonPress("Inventory")}
         />

        </View>
        
        </View>
    )
} 
export default CarItem;
import { View, FlatList,Dimensions } from 'react-native'
import React from 'react'
import cars from './cars'
import CarItem from "../CarItem"


const CarList = () => {
  return (
    <View style={{width:"100%",height:"100%"}}>
      <FlatList
      showsVerticalScrollIndicator={false}
      pagingEnabled
      scrollEventThrottle={16}
      bounces={false}
      snapToAlignment={"center"}
      snapToInterval={Dimensions.get("window").height}
      decelerationRate={"normal"}
      data={cars}
      keyExtractor={(item) => item.name }
      renderItem={({item}) => <CarItem car={item}
      />}
      /> 
    </View>
  )
}

export default CarList
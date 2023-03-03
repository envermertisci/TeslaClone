import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"


const StyledButton = (props) => {
    /* const type=props.type
    const content= props.content;
    const onPress = props.onPress; */
    
    const {type,content,onPress} = props;
    
    const backgroundColor = type === "primary" ? "#171A20CC" : "white";
    const textColor=type=="primary" ? "white" : "171A20CC";
    

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={onPress}
            >
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>

            </Pressable>
        </View>
    )
}
export default StyledButton;

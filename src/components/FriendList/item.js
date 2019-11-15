import React from 'react'
import { View, Text, Image ,StyleSheet, TouchableWithoutFeedback} from 'react-native'

const FriendListItem = ({name,image,id,onPress}) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.root}>
                <Image style={styles.imageAvatar} source={{uri : image}} />
                <Text>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root : {
        
        backgroundColor : "white",
        flexDirection : "row",
        alignItems : "center",
        marginTop: 15,
        marginHorizontal : 15,
        padding : 15,
    },  
    imageAvatar : {
        height : 45,
        width : 45,
        borderRadius : 45,
        marginRight : 15
    }
})

export default FriendListItem

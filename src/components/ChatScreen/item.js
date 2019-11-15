import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import EmojiList from './emojiList'

const ChatItem = ({text,name,image,isUserMessage}) => {

    const [showEmojies, setShowEmojies] = useState(false)

    return (
        <View style={[styles.root, isUserMessage ? styles.userMessageContainer : styles.otherMessageContainer]}>
            {
                !isUserMessage &&  
                <View style={styles.avatarSection}>
                    <Image style={styles.image} source={{uri : image ? image : "http://www.abc.net.au/news/image/8314104-1x1-940x940.jpg"}} />
                    <Text>{name}</Text>
                </View>
            }
            <TouchableWithoutFeedback onPress={() => setShowEmojies(!showEmojies)}>
            <View style={[isUserMessage ? styles.userMessageStyle : styles.otherMessageStyle,styles.messageStyle]}>
                <Text style={isUserMessage ? styles.userMessageTextStyle : styles.otherMessageTextStyle}>{text}</Text>
            </View>
            </TouchableWithoutFeedback>
            {
                showEmojies && <EmojiList />
            }
        </View>
    )
}

export default ChatItem


const styles = StyleSheet.create({
    root : {
        margin : 15,
    },
    userMessageContainer : {
        alignItems : "flex-end"
    },
    otherMessageContainer : {
        alignItems : "flex-start"
    },
    userMessageStyle : {
        backgroundColor : "#2e5871",
    },
    userMessageTextStyle : {
        color : "#FFFFFF"
    },
    otherMessageStyle:  {
        backgroundColor : "#c4ccdf",       
    },
    otherMessageTextStyle : {
        color  : "black"
    },
    messageStyle : {
        padding : 10,
        width : 250,
        borderRadius : 15,
        marginTop : 5
    },
    avatarSection: {
        alignItems : "center",
        flexDirection : "row"
    },
    image : {
        height : 30,
        width : 30,
        borderRadius : 150,
        marginHorizontal : 10
    }
})
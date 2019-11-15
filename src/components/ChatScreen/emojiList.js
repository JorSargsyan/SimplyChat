import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Animated, Easing} from 'react-native';
import EmojiItem from "./emojiItem"

const EmojiList = () => {
    const [list, setList] = useState([
        {
            name : "Like",
            imagePath : "http://www.vectorico.com/download/emoticon/Facebook-Like.png",
        },
        {
            name : "Love",
            imagePath : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLb47nqKmwJJVIg4REjnXXMLDd1CthOWmVOCRj8kQJ79YY7ZZE"
        },
        {
            name : "Haha",
            imagePath : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw6yhcerKoozUT2bRmpDmgi7-gMnDYSsZMncNLK3ZNI_YgwI-L"
        },
        {
            name : "Wow",
            imagePath : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLeRPq_bJYkkr6iYH-_xRW9VSNV16glxL-msF-hX4L8zmuKvr9"
        },
        {
            name : "Sad",
            imagePath : "https://www.trzcacak.rs/myfile/detail/30-301293_facebook-sad-emoji-png-sad-sign-in-facebook.png"
        }
    ]);


    return (
        <View style={styles.listContainer}>
            {
                list && list.map((item)=>{
                    return (
                      <View style={styles.item}>
                        <EmojiItem item={item} />
                      </View>
                    );
                })
            }
            
        </View>
    )
}

export default EmojiList


const styles = StyleSheet.create({
    listContainer : {
        flexDirection : "row",
        backgroundColor : "white",
        padding : 5,
        borderRadius : 15,
        position : "absolute",
        bottom: -30,
    },
    item : {
        paddingHorizontal : 5,
        alignItems : "center",
    }
})

import React,{useEffect} from 'react'
import { View, Text, Image , Animated } from 'react-native'

const EmojiItem = ({item}) => {
    const animatedWidth = new Animated.Value(0);
    const animatedHeight = new Animated.Value(0);

    useEffect(()=>{
        Animated.timing(animatedWidth, {
            toValue: 30,
            duration: 1000
         }).start();

         Animated.timing(animatedHeight, {
            toValue: 30,
            duration: 1000
         }).start()
    },[])

    return (
      <Animated.View>
        <Image style={{height: 20, width: 20}} source={{uri: item.imagePath}} />
        <Text style={{fontSize: 10}}>{item.name}</Text>
      </Animated.View>
    );
}

export default EmojiItem

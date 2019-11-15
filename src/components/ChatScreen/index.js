import React, {useState,useEffect} from 'react'
import { View, Text ,FlatList,SafeAreaView ,Image ,ActivityIndicator} from 'react-native'
import ChatItem from "./item";
import messages from "../../data/messages";

const ChatScreen = ({navigation}) => {
    const [userData, setUserData] = useState({
        name : "John",
        currentUserId : 1,
        senderImage : "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/03/john_malkovich.jpg",
    })

    const [chatUserData,setChatUserData] = useState({});
    const [messagesList,setMessagesList] = useState([]);

    useEffect(() => {
        setChatUserData({
            ...navigation.getParam('chatUserData')
        });
    }, []);

    useEffect(() => {
        const messagesList = messages.filter(
            item => (item.senderId === userData.currentUserId && item.recieverId === chatUserData.id) ||
            (item.senderId === chatUserData.id && item.recieverId === userData.currentUserId)
        );
        setMessagesList(messagesList);
    }, [chatUserData])

    return (
        <SafeAreaView style={{backgroundColor : "#f5f5f5",height : "100%"}}>
            {
                messagesList  ?   <FlatList
            data={messagesList}
            renderItem={({ item }) => 
                <ChatItem 
                    text={item.messageText}
                    name={item.senderName}
                    image={chatUserData.imageUrl}
                    isUserMessage={item.senderId == userData.currentUserId}
                />}
            keyExtractor={item => item.messageId}
            />  : <ActivityIndicator style={{height : '100%'}} size="large" color="#0000ff"/>
            }
            
        </SafeAreaView>
    )
}

ChatScreen.navigationOptions = ({navigation}) => {
    const chatUserData = navigation.getParam('chatUserData')
    return {
        title : chatUserData.name,
        headerRight: () => (
            <Image
                style={{height : 45,width : 45,borderRadius : 45,marginRight : 15}}
                source={{uri :chatUserData.imageUrl }}
            />
        )
    }
}

export default ChatScreen

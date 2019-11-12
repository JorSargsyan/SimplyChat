import React, {useState} from 'react'
import { View, Text ,FlatList,SafeAreaView} from 'react-native'
import ChatItem from "./item";

const ChatScreen = () => {

    const [messagesList, setMessagesList] = useState([
        {
            id : 1,
            senderId : 1,
            senderName : "John",
            senderImage : "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/03/john_malkovich.jpg",
            messageText : "Hi!!!"
        },
        {
            id : 2,
            senderId : 1,
            senderName : "John",
            senderImage : "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/03/john_malkovich.jpg",
            messageText : "How are you?"
        },
        {
            id : 3,
            senderId : 2,
            senderName : "Jack",
            senderImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jack_Nicholson_-_1976.jpg/220px-Jack_Nicholson_-_1976.jpg",
            messageText : "Hello,I'm fine and you?"
        },   {
            id : 4,
            senderId : 2,
            senderName : "Jack",
            senderImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jack_Nicholson_-_1976.jpg/220px-Jack_Nicholson_-_1976.jpg",
            messageText : "What about your new job?"
        },   {
            id : 5,
            senderId : 1,
            senderName : "John",
            senderImage : "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/03/john_malkovich.jpg",
            messageText : "Its great,really."
        },   {
            id : 6,
            senderId : 2,
            senderName : "Jack",
            senderImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jack_Nicholson_-_1976.jpg/220px-Jack_Nicholson_-_1976.jpg",
            messageText : "Cool))Iam happy for you."
        },
        {
            id : 7,
            senderId : 1,
            senderName : "John",
            senderImage : "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/03/john_malkovich.jpg",
            messageText : "I should ask you to come with me to the next Oscar.What do you think about it?"
        },
        {
            id : 8,
            senderId : 2,
            senderName : "Jack",
            senderImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Jack_Nicholson_-_1976.jpg/220px-Jack_Nicholson_-_1976.jpg",
            messageText : "Oh dude.I'm sorry but I just promised Tarantino to go with him.Sorry man((("
        }
    ])

    const [userData, setUserData] = useState({
        name : "John",
        id : 1,
    })

    return (
        <SafeAreaView style={{backgroundColor : "#f5f5f5",height : "100%"}}>
            <FlatList
            data={messagesList}
            renderItem={({ item }) => 
                <ChatItem 
                    text={item.messageText}
                    name={item.senderName}
                    image={item.senderImage}
                    isUserMessage={item.senderId == userData.id}
                />}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default ChatScreen

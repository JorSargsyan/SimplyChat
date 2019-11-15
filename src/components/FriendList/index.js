import React, {useState} from 'react'
import {View, Text, FlatList, SafeAreaView,StyleSheet} from 'react-native';
import friends from "../../data/friends";
import FriendListItem from "./item"


const FriendsList = ({navigation}) => {

    const handleNavigation = (item) => {
        navigation.navigate('ChatScreen',{chatUserData :item })
    } 

    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                data={friends}
                renderItem={({item}) => (
                    <FriendListItem
                        name={item.name}
                        image={item.imageUrl}
                        onPress={()=>handleNavigation(item)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root : {
        backgroundColor : "#D4D4D4",
        flex : 1
    }
})

export default FriendsList;

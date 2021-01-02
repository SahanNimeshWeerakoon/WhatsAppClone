import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './styles';

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    console.log(user.imageUri);

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                <View style={styles.middleContainer}>
                    <Text style={styles.username}> {user.name} </Text>
                    <Text style={styles.lastMessage}> { chatRoom.lastMessage.content } </Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {/* <Text> {chatRoom.lastMessage.createdAt} </Text> */}
                <Text style={styles.time}> Yesterday </Text>
            </View>
        </View>
    )
}

export default ChatListItem
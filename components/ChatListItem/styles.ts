import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row'
    },
    middleContainer: {
        justifyContent: 'space-around'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 10
    },
    lastMessage: {
        fontSize: 15,
        color: 'grey'
    },
    time: {
        fontSize: 14,
        color: 'grey'
    }
});

export default styles
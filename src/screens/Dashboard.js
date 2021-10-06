import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.userWrap}>
                <FontAwesome5 name="user-alt" size={104} color="#ccc" />
                <View>
                    <Text style={styles.textName}>Good Morning,</Text>
                    <Text style={styles.textName}>Eugen</Text>
                </View>
            </View>
            <View style={styles.messagesContainer}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Messages</Text>
                </View>
                <View style={styles.messageWrap}>
                    <Text style={styles.message}>No symtomps today</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    userWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    textName: {
        fontSize: 24,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 8,
    },
    messagesContainer: {
        borderWidth: 1,
        alignItems: 'center',
        width: '100%',
    },
    titleWrap: {
        borderBottomWidth: 1,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        lineHeight: 34,
    },
    messageWrap: {
        padding: 20,
    },
    message: {
        fontSize: 24,
        lineHeight: 34,
    },
});

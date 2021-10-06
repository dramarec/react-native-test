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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    userWrap: {
        // position: 'absolute',
        // top: 30,
        // left: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        width: '100%',
    },
    textName: {
        fontSize: 24,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 8,
    },
});

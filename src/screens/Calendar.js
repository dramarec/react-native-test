import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Calendar() {
    return (
        <View style={styles.container}>
            <Text style={styles.textName}>Calendar.</Text>
            <Text style={styles.textName}>Nothing</Text>
            <Text style={styles.textName}>here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    textName: {
        fontSize: 24,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 8,
    },
});

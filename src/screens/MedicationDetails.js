import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MedicationDetails() {
    const { params } = useRoute();
    const item = params?.item;

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.textName}>{item.medicament}</Text>
                <Text style={styles.textName}>{item.time}</Text>
            </View>
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
    wrapper: {
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#ffcc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    textName: {
        fontSize: 24,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        margin: 24,
    },
});

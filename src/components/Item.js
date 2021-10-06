import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Item({ item }) {
    const isChecked = item.checked;
    const checked = isChecked ? 'check-box' : 'check-box-outline-blank';

    return (
        <View style={styles.wrapItem}>
            <Text style={styles.textTime}>{item.time}</Text>
            <Text style={styles.textItem}>{item.medicament}</Text>
            <MaterialIcons name={checked} size={42} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 5,
        padding: 15,
    },
    textTime: {
        fontSize: 18,
        lineHeight: 24,
        marginRight: 5,
    },
    textItem: {
        fontSize: 24,
        lineHeight: 24,
        marginRight: 'auto',
    },
});

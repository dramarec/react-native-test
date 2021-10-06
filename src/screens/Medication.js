import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Item from '../components/Item';

const medicationList = [
    { id: '01', time: '08:08', checked: false, medicament: 'analgin' },
    { id: '02', time: '10:20', checked: false, medicament: 'aspirin' },
    { id: '03', time: '12:00', checked: true, medicament: 'soda' },
    { id: '04', time: '15:17', checked: true, medicament: 'islomin' },
    { id: '05', time: '18:00', checked: false, medicament: 'mint' },
];
export function Medication() {
    const navigation = useNavigation();

    const [medications, setMedications] = useState(medicationList);
    console.log('🔥🚀 ===> Medication ===> medications', medications);

    const toggleCheck = id => {
        console.log('🔥🚀 ===> Medication ===> id', id);
        setMedications(
            medications.map(el =>
                el.id === id ? { ...el, checked: !el.checked } : el,
            ),
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.textName}>Medication</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    data={medications}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => toggleCheck(item.id)}
                            onLongPress={() =>
                                navigation.navigate('MedicationDetails', {
                                    item,
                                })
                            }>
                            <Item item={item} />
                        </TouchableOpacity>
                    )}
                />
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
        width: '100%',
        padding: 15,
    },
    textName: {
        fontSize: 24,
        lineHeight: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 24,
    },
});

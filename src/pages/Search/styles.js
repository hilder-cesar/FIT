/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styleSearch = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 16
    },
    icon: {
        position: 'absolute', 
        bottom: 7
    },
    input: {
        width: '100%', 
        borderBottomColor: '#FF217A', 
        borderBottomWidth: 1, 
        paddingVertical: 1, 
        paddingHorizontal: 25,
        fontSize: 16
    }
})

export default styleSearch;
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
    container: {
        marginTop: -40, 
        padding: 16
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue',
        opacity: 0.5        
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#eecb26'
    }
})

export default styleHome;
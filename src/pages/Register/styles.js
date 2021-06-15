/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styleRegister = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: 'white'
    },
    imc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imcLabel:{
        fontFamily: 'Montserrat-Bold',
        marginHorizontal: 15,
        fontSize: 14
    },
    input: {
        height: 50,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#EFEFEF',
        width: '100%',
        marginVertical: 10
    },
})

export default styleRegister;
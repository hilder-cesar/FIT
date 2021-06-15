/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 16,
        paddingBottom: 30,
        backgroundColor: 'white'
    },
    arch: {
        position: 'absolute',
        top: 0,
        width: '120%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    archInside: {
        width: '100%',
        height: 320,
        backgroundColor: 'white',
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200
    },
    title: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginVertical: 25,
        color: 'black',
        zIndex: 2
    },
    button: {
        backgroundColor: 'black',
        width: '100%'
    }
})

export default styleLogin;
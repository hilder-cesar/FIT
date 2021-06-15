/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <View>
        <TextInput ref={inputRef} style={styles.input} 
        onChangeText={value => { if (inputRef.current) { inputRef.current.value = value; }} }
        {...rest}/>
        { error && <Text style={styles.error}>{error}</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
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
    error: {
        marginTop: -10,
        paddingHorizontal: 10,
        fontSize: 10,
        color: 'red',
        fontFamily: 'Montserrat-Bold'
    }
})
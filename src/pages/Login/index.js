/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import * as Yup from 'yup';

import PrimaryButton from '../../components/buttons/primaryButton';
import LinearGradient from 'react-native-linear-gradient';

import styleLogin from './styles';

export default function Login({ navigation }) {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Campo obrigatório'),
                password: Yup.string().required('Campo obrigatório').min(6, 'Mínimo de ${min} caracteres')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            navigation.navigate('Register');

        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    }

    return (
        <View style={styleLogin.container}>
            <LinearGradient colors={['#FF217A', '#FF4D4D']} start={{ x: 0, y: 0 }} style={styleLogin.arch}>
                <View style={styleLogin.archInside}></View>
            </LinearGradient>
            <Text style={styleLogin.title}>Login & Register </Text>
            <Form ref={formRef} onSubmit={handleSubmit} style={{width: '100%'}}>
                <Input name="name" autoCapitalize="none" placeholder="Nome" />
                <Input name="password" secureTextEntry={true} autoCapitalize="none" autoCompleteType="password" placeholder="Senha" />
                <PrimaryButton onPress={() => formRef.current.submitForm()} />
            </Form>
        </View>
    )

}
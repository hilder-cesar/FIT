/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { View, Button, Text, Picker } from 'react-native';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import PrimaryButton from '../../components/buttons/primaryButton';

import styleRegister from './styles'

export default function Register({ navigation }) {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Campo obrigatório'),
                email: Yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
                imc: Yup.object().shape({
                    weight: Yup.number().required('Campo obrigatório').min(40, 'No mínimo ${min}kg'),
                    height: Yup.number().required('Campo obrigatório').min(140, 'No mínimo ${min}cm')
                })
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            navigation.navigate('Home');

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
        <View style={styleRegister.container}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome" />
                <Input name="email" placeholder="E-mail" />

                <Scope path="imc">
                    <View style={styleRegister.imc}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Input name="weight" keyboardType="numeric" placeholder="Peso" />
                            </View>
                            <Text style={styleRegister.imcLabel}>Kg</Text>
                        </View>
                        <View style={{ borderLeftWidth: 1, borderLeftColor: '#C9C9C9', height: '50%' }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styleRegister.imcLabel}>Cm</Text>
                            <View>
                                <Input name="height" keyboardType="numeric" placeholder="Altura" />
                            </View>
                        </View>
                    </View>
                </Scope>
                
                <PrimaryButton onPress={() => formRef.current.submitForm()} />
            </Form>
        </View>
    )

}
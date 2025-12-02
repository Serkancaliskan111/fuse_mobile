import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { signIn } from "@/lib/appwrite";
import * as Sentry from '@sentry/react-native'; // <-- Sentry import

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit: any = async () => {
        const { email, password } = form;
        if (!email || !password) return Alert.alert('Error', 'Please enter a valid email and password.');
        setIsSubmitting(true);
        try {
            await signIn({ email, password });
            // Başarılı giriş sonrası yönlendirme örneği
            router.replace("/");
        } catch (error: any) {
            Alert.alert('Login Error', error.message);
            // Hata Sentry’e gönderiliyor
            Sentry.captureException(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter your email address"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton
                title="Sign In"
                isLoading={isSubmitting}
                onPress={submit}
            />
            <View className="flex justify-center mt-5 flex-row gap-5">
                <Text className="base-regular text-gray-500">
                    Don’t have an account?
                </Text>
                <Link href="/sign-up" className="base-bold text-primary">
                    Sign Up
                </Link>
            </View>
        </View>
    );
};

export default SignIn;

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Mail, Lock } from 'lucide-react-native';
import AuthHeader from '@/components/auth/AuthHeader';
import InputField from '@/components/auth/InputField';
import AuthButton from '@/components/auth/AuthButton';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Navigate to home on login
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header with gradient */}
        <AuthHeader />

        {/* Form */}
        <View className="flex-1 px-6 pt-8 pb-6">
          <Text className="text-neutral-800 text-2xl font-bold">Welcome Back login</Text>
          <Text className="text-neutral-400 text-sm mt-1 mb-8">
            Sign in to continue donating
          </Text>

          {/* Email input */}
          <InputField
            placeholder="Email address"
            icon={Mail}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Password input */}
          <InputField
            placeholder="Password"
            icon={Lock}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Remember me + Forgot */}
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
            >
              <View
                className={`w-5 h-5 rounded border-2 mr-2 items-center justify-center ${
                  rememberMe
                    ? 'bg-primary-500 border-primary-500'
                    : 'border-neutral-300 bg-white'
                }`}
              >
                {rememberMe && (
                  <Text className="text-white text-xs font-bold">✓</Text>
                )}
              </View>
              <Text className="text-neutral-600 text-sm">Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-primary-500 text-sm font-semibold">Forgot?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In button */}
          <AuthButton title="Sign In" onPress={handleLogin} />

          {/* Create account */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-neutral-400 text-sm">New donor? </Text>
            <TouchableOpacity
              onPress={() => router.push('/(auth)/register')}
              activeOpacity={0.7}
            >
              <Text className="text-primary-500 text-sm font-semibold">Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

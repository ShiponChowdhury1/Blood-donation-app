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
import { User, Mail, Phone, Lock, Droplet } from 'lucide-react-native';
import AuthHeader from '@/components/auth/AuthHeader';
import InputField from '@/components/auth/InputField';
import AuthButton from '@/components/auth/AuthButton';
import BloodGroupChip from '@/components/ui/BloodGroupChip';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');

  const handleRegister = () => {
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
        {/* Header */}
        <AuthHeader title="Blood-Donation" subtitle="Join the lifesaving community" />

        {/* Form */}
        <View className="flex-1 px-6 pt-8 pb-6">
          <Text className="text-neutral-800 text-2xl font-bold">Create Account</Text>
          <Text className="text-neutral-400 text-sm mt-1 mb-8">
            Sign up and start saving lives today
          </Text>

          {/* Full name */}
          <InputField
            placeholder="Full name"
            icon={User}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          {/* Email */}
          <InputField
            placeholder="Email address"
            icon={Mail}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Phone */}
          <InputField
            placeholder="Phone number"
            icon={Phone}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          {/* Password */}
          <InputField
            placeholder="Password"
            icon={Lock}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Blood group selection */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Droplet size={18} color="#A8A29E" />
              <Text className="text-neutral-500 text-sm ml-2">Select blood group</Text>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {bloodGroups.map((group) => (
                <BloodGroupChip
                  key={group}
                  group={group}
                  isSelected={selectedBloodGroup === group}
                  onPress={() => setSelectedBloodGroup(group)}
                />
              ))}
            </View>
          </View>

          {/* Sign Up button */}
          <AuthButton title="Sign Up" onPress={handleRegister} />

          {/* Sign in link */}
          <View className="flex-row justify-center mt-6 mb-4">
            <Text className="text-neutral-400 text-sm">Already a donor? </Text>
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Text className="text-primary-500 text-sm font-semibold">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

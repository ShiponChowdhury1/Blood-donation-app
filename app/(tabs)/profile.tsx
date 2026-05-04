import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCircle } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-20 h-20 rounded-full bg-red-50 items-center justify-center mb-4">
          <UserCircle size={36} color="#E03131" />
        </View>
        <Text className="text-neutral-800 text-xl font-bold mb-2">Your Profile</Text>
        <Text className="text-neutral-400 text-sm text-center leading-5">
          Manage your profile, donation history, and account settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}

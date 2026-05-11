import ProfileForm from "@/components/profile/ProfileForm";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={["top"]}>
      {/* Header */}
      <View className="px-4 py-4 bg-white border-b border-neutral-100">
        <Text className="text-2xl font-bold text-neutral-800">My Profile</Text>
        <Text className="text-sm text-neutral-500 mt-1">
          Manage your account and settings
        </Text>
      </View>

      {/* Content */}
      <ProfileForm />
    </SafeAreaView>
  );
}

import BloodRequestsList from "@/components/home/BloodRequestsList";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RequestsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={["top"]}>
      {/* Header */}
      <View className="px-4 py-4 bg-white border-b border-neutral-100">
        <Text className="text-2xl font-bold text-neutral-800">
          Blood Requests
        </Text>
        <Text className="text-sm text-neutral-500 mt-1">
          Help those in need near you
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <BloodRequestsList />
      </ScrollView>
    </SafeAreaView>
  );
}

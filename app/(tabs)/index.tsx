import DidYouKnow from "@/components/home/DidYouKnow";
import DonationStatus from "@/components/home/DonationStatus";
import DonorSearch from "@/components/home/DonorSearch";
import HeroBanner from "@/components/home/HeroBanner";
import StatsCards from "@/components/home/StatsCards";
import UpcomingCamps from "@/components/home/UpcomingCamps";
import UrgentRequests from "@/components/home/UrgentRequests";
import { useRouter } from "expo-router";
import { Bell, Droplet, LogOut, X } from "lucide-react-native";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const [isNotificationModalVisible, setIsNotificationModalVisible] =
    useState(false);

  const notifications = [
    {
      id: "1",
      title: "Urgent A+ Request Nearby",
      message: "A patient at City Hospital needs A+ blood in the next 2 hours.",
      time: "2 min ago",
    },
    {
      id: "2",
      title: "Camp Reminder",
      message: "Free blood donation camp starts tomorrow at 10:00 AM.",
      time: "1 hour ago",
    },
    {
      id: "3",
      title: "Donation Eligibility Updated",
      message:
        "You are now eligible to donate again. Thank you for staying with us.",
      time: "Yesterday",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={["top"]}>
      {/* Top Header Bar */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-neutral-100">
        <View className="flex-row items-center">
          <View className="w-8 h-8 rounded-full bg-primary-500 items-center justify-center mr-2">
            <Droplet size={16} color="#FFFFFF" fill="#FFFFFF" />
          </View>
          <View>
            <Text className="text-neutral-800 font-bold text-base">
              Blood-Donation
            </Text>
            <Text className="text-neutral-400 text-xs">Save lives, daily</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          {/* Notification bell */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-neutral-50 items-center justify-center relative"
            activeOpacity={0.7}
            onPress={() => setIsNotificationModalVisible(true)}
          >
            <Bell size={20} color="#44403C" />
            <View className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary-500 rounded-full border-2 border-white" />
          </TouchableOpacity>

          {/* Avatar */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-neutral-200 items-center justify-center overflow-hidden"
            activeOpacity={0.7}
          >
            <Text className="text-neutral-600 font-bold text-sm">A</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-neutral-50 items-center justify-center"
            activeOpacity={0.7}
            onPress={() => router.replace("/(auth)/login")}
          >
            <LogOut size={18} color="#78716C" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <HeroBanner />
        <DonationStatus />
        <DonorSearch />
        <StatsCards />
        <UrgentRequests />
        <UpcomingCamps />
        <DidYouKnow />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent
        visible={isNotificationModalVisible}
        onRequestClose={() => setIsNotificationModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-3xl px-5 pt-5 pb-7 max-h-[75%]">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-bold text-neutral-800">
                Notifications
              </Text>
              <TouchableOpacity
                className="w-9 h-9 rounded-full bg-neutral-100 items-center justify-center"
                activeOpacity={0.7}
                onPress={() => setIsNotificationModalVisible(false)}
              >
                <X size={18} color="#44403C" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {notifications.map((item) => (
                <View
                  key={item.id}
                  className="mb-3 p-4 rounded-2xl border border-neutral-100 bg-neutral-50"
                >
                  <Text className="text-sm font-bold text-neutral-800 mb-1">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-neutral-500 mb-2 leading-5">
                    {item.message}
                  </Text>
                  <Text className="text-[11px] text-neutral-400">
                    {item.time}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

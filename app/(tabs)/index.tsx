import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, LogOut, Droplet } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import HeroBanner from '@/components/home/HeroBanner';
import DonationStatus from '@/components/home/DonationStatus';
import DonorSearch from '@/components/home/DonorSearch';
import StatsCards from '@/components/home/StatsCards';
import UrgentRequests from '@/components/home/UrgentRequests';
import UpcomingCamps from '@/components/home/UpcomingCamps';
import DidYouKnow from '@/components/home/DidYouKnow';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      {/* Top Header Bar */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-neutral-100">
        <View className="flex-row items-center">
          <View className="w-8 h-8 rounded-full bg-primary-500 items-center justify-center mr-2">
            <Droplet size={16} color="#FFFFFF" fill="#FFFFFF" />
          </View>
          <View>
            <Text className="text-neutral-800 font-bold text-base">Blood-Donation</Text>
            <Text className="text-neutral-400 text-xs">Save lives, daily</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          {/* Notification bell */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-neutral-50 items-center justify-center relative"
            activeOpacity={0.7}
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
            onPress={() => router.replace('/(auth)/login')}
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
    </SafeAreaView>
  );
}

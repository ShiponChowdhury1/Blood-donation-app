import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, Heart } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeroBanner() {
  return (
    <View className="mx-4 mt-4 rounded-2xl overflow-hidden">
      <LinearGradient
        colors={['#E03131', '#C92A2A', '#9B1D1D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-5 pb-6"
      >
        {/* Decorative heart */}
        <View className="absolute top-4 right-6 opacity-20">
          <Heart size={80} color="#FFFFFF" fill="#FFFFFF" />
        </View>

        {/* Eligible badge */}
        <View className="bg-white/20 self-start px-3 py-1 rounded-full flex-row items-center mb-3">
          <Text className="text-white text-xs">✨ Hi Aryan, you're eligible to donate!</Text>
        </View>

        {/* Main text */}
        <Text className="text-white text-xl font-bold mb-2">
          One pint of blood. Three lives saved.
        </Text>
        <Text className="text-white/80 text-sm mb-5 leading-5">
          There are 3 urgent requests within 5 km of you. Be the reason someone goes home tonight.
        </Text>

        {/* Buttons */}
        <View className="flex-row gap-3">
          <TouchableOpacity
            className="bg-white flex-row items-center px-5 py-2.5 rounded-full"
            activeOpacity={0.8}
          >
            <Text className="text-primary-500 font-bold text-sm mr-1">⊕ Donate now</Text>
            <ChevronRight size={16} color="#E03131" />
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-white/40 px-5 py-2.5 rounded-full"
            activeOpacity={0.8}
          >
            <Text className="text-white font-semibold text-sm">Request blood</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

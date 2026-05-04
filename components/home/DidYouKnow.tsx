import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';

export default function DidYouKnow() {
  return (
    <View className="mx-4 mt-6 mb-8 bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
      <View className="flex-row">
        {/* Content */}
        <View className="flex-1 pr-4">
          {/* Badge */}
          <View className="bg-red-50 self-start px-3 py-1 rounded-full flex-row items-center mb-3">
            <Heart size={12} color="#E03131" fill="#E03131" />
            <Text className="text-primary-500 text-xs font-medium ml-1.5">Did you know?</Text>
          </View>

          <Text className="text-neutral-800 font-bold text-base mb-2">
            Every <Text className="text-primary-500">2 seconds</Text> someone needs blood.
          </Text>
          <Text className="text-neutral-500 text-sm leading-5 mb-5">
            Your single donation can save up to three lives. Schedule your next donation in just a few taps and become a regular hero in your community.
          </Text>

          {/* Action buttons */}
          <View className="flex-row gap-3">
            <TouchableOpacity
              className="bg-neutral-800 px-5 py-3 rounded-xl"
              activeOpacity={0.8}
            >
              <Text className="text-white text-sm font-semibold">Schedule donation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-neutral-300 px-5 py-3 rounded-xl"
              activeOpacity={0.7}
            >
              <Text className="text-neutral-700 text-sm font-medium">Learn more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Image placeholder - using a gradient block */}
        <View className="w-28 h-36 rounded-xl bg-red-100 overflow-hidden items-center justify-center">
          <Heart size={40} color="#E03131" fill="#FFE3E3" />
          <Text className="text-primary-500 text-xs font-medium mt-2">Save Lives</Text>
        </View>
      </View>
    </View>
  );
}

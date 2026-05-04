import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Droplet } from 'lucide-react-native';

export default function DonationStatus() {
  const progress = 0.95;
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-neutral-800 font-semibold text-base">Next donation</Text>
        <Text className="text-green-500 font-bold text-sm">Ready</Text>
      </View>

      {/* Circular Progress */}
      <View className="items-center mb-4">
        <View className="relative items-center justify-center">
          <Svg width={size} height={size}>
            {/* Background circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#FFE3E3"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E03131"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${size / 2}, ${size / 2}`}
            />
          </Svg>
          {/* Center content */}
          <View className="absolute items-center justify-center">
            <Droplet size={16} color="#E03131" fill="#E03131" />
            <Text className="text-neutral-800 font-bold text-lg mt-0.5">95%</Text>
          </View>
        </View>

        <Text className="text-neutral-800 font-medium text-sm mt-3">You're good to go</Text>
        <Text className="text-neutral-400 text-xs mt-1">Last donated 3 months ago</Text>
      </View>

      {/* Stats row */}
      <View className="flex-row justify-between items-center pt-4 border-t border-neutral-100">
        <View className="items-center flex-1">
          <Text className="text-neutral-800 font-bold text-lg">12</Text>
          <Text className="text-neutral-400 text-xs">Donations</Text>
        </View>
        <View className="w-px h-8 bg-neutral-200" />
        <View className="items-center flex-1">
          <Text className="text-neutral-800 font-bold text-lg">36</Text>
          <Text className="text-neutral-400 text-xs">Lives</Text>
        </View>
        <View className="w-px h-8 bg-neutral-200" />
        <View className="items-center flex-1">
          <Text className="text-amber-500 font-bold text-lg">Gold</Text>
          <Text className="text-neutral-400 text-xs">Tier</Text>
        </View>
      </View>
    </View>
  );
}

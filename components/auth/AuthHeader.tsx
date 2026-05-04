import React from 'react';
import { View, Text } from 'react-native';
import { Droplet } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function AuthHeader({ 
  title = 'Blood-Donation', 
  subtitle = 'Donate blood, save lives' 
}: AuthHeaderProps) {
  return (
    <View className="w-full items-center rounded-b-3xl overflow-hidden">
      <LinearGradient
        colors={['#E03131', '#C92A2A', '#A51111']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full items-center pt-16 pb-10 px-6"
      >
        {/* Decorative circles */}
        <View className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <View className="absolute top-20 -left-10 w-32 h-32 rounded-full bg-white/5" />

        {/* Blood drop icon */}
        <View className="w-16 h-16 rounded-full bg-white/20 items-center justify-center mb-4">
          <Droplet size={32} color="#FFFFFF" fill="#FFFFFF" />
        </View>

        {/* Title */}
        <Text className="text-white text-2xl font-bold tracking-wide">{title}</Text>
        <Text className="text-white/80 text-sm mt-1">{subtitle}</Text>
      </LinearGradient>
    </View>
  );
}

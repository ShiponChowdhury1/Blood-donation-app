import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  variant?: 'primary' | 'outline';
}

export default function AuthButton({
  title,
  onPress,
  isLoading = false,
  variant = 'primary',
}: AuthButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.8}
      className={`w-full py-4 rounded-xl items-center justify-center mt-2 ${
        isPrimary
          ? 'bg-primary-500'
          : 'bg-white border-2 border-primary-500'
      } ${isLoading ? 'opacity-70' : ''}`}
    >
      {isLoading ? (
        <ActivityIndicator color={isPrimary ? '#FFFFFF' : '#E03131'} />
      ) : (
        <Text
          className={`text-base font-bold ${
            isPrimary ? 'text-white' : 'text-primary-500'
          }`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

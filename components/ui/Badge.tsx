import React from 'react';
import { View, Text } from 'react-native';

type BadgeVariant = 'critical' | 'urgent' | 'normal' | 'success' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
  critical: { bg: 'bg-red-100', text: 'text-red-600' },
  urgent: { bg: 'bg-orange-100', text: 'text-orange-600' },
  normal: { bg: 'bg-gray-100', text: 'text-gray-600' },
  success: { bg: 'bg-green-100', text: 'text-green-700' },
  info: { bg: 'bg-blue-100', text: 'text-blue-600' },
};

export default function Badge({ label, variant = 'normal' }: BadgeProps) {
  const style = variantStyles[variant];

  return (
    <View className={`px-2.5 py-0.5 rounded-full ${style.bg}`}>
      <Text className={`text-xs font-semibold ${style.text}`}>{label}</Text>
    </View>
  );
}

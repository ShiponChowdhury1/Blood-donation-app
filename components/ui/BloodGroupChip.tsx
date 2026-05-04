import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface BloodGroupChipProps {
  group: string;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function BloodGroupChip({ group, isSelected = false, onPress }: BloodGroupChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full border mr-2 ${
        isSelected
          ? 'bg-primary-500 border-primary-500'
          : 'bg-white border-neutral-200'
      }`}
      activeOpacity={0.7}
    >
      <Text
        className={`text-sm font-semibold ${
          isSelected ? 'text-white' : 'text-neutral-800'
        }`}
      >
        {group}
      </Text>
    </TouchableOpacity>
  );
}

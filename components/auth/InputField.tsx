import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

interface InputFieldProps {
  placeholder: string;
  icon: LucideIcon;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function InputField({
  placeholder,
  icon: Icon,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
}: InputFieldProps) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View className="flex-row items-center bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 mb-4">
      <Icon size={20} color="#A8A29E" />
      <TextInput
        className="flex-1 ml-3 text-base text-neutral-800"
        placeholder={placeholder}
        placeholderTextColor="#A8A29E"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} activeOpacity={0.7}>
          {isSecure ? (
            <EyeOff size={20} color="#A8A29E" />
          ) : (
            <Eye size={20} color="#A8A29E" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

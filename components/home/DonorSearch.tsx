import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Search, MapPin } from 'lucide-react-native';
import BloodGroupChip from '../ui/BloodGroupChip';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

export default function DonorSearch() {
  const [selectedGroup, setSelectedGroup] = useState('O+');

  return (
    <View className="mt-6 mx-4">
      {/* Title */}
      <View className="flex-row justify-between items-start mb-1">
        <View>
          <Text className="text-neutral-800 font-bold text-lg">Find a donor near you</Text>
          <Text className="text-neutral-400 text-sm mt-0.5">
            Search by location or filter by blood group
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center" activeOpacity={0.7}>
          <MapPin size={14} color="#E03131" />
          <Text className="text-primary-500 text-sm font-medium ml-1">Use my location</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View className="flex-row items-center bg-white border border-neutral-200 rounded-xl px-4 py-3 mt-4">
        <Search size={18} color="#A8A29E" />
        <TextInput
          className="flex-1 ml-3 text-sm text-neutral-800"
          placeholder="Search city, hospital, or pincode..."
          placeholderTextColor="#A8A29E"
        />
        <TouchableOpacity className="bg-neutral-900 px-5 py-2 rounded-lg" activeOpacity={0.8}>
          <Text className="text-white text-sm font-semibold">Search</Text>
        </TouchableOpacity>
      </View>

      {/* Blood group chips */}
      <View className="mt-4 flex-row items-center">
        <Text className="text-neutral-500 text-sm mr-3">Group:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {bloodGroups.map((group) => (
            <BloodGroupChip
              key={group}
              group={group}
              isSelected={selectedGroup === group}
              onPress={() => setSelectedGroup(group)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

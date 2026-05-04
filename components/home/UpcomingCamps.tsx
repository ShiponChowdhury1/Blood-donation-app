import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock, MapPin, ChevronRight } from 'lucide-react-native';

interface Camp {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  slotsLeft: number;
}

const camps: Camp[] = [
  {
    id: '1',
    day: '12',
    month: 'May',
    title: 'Community Blood Drive',
    time: '9:00 AM',
    location: 'Central Park, Sector 21',
    slotsLeft: 24,
  },
  {
    id: '2',
    day: '18',
    month: 'May',
    title: 'College Donation Camp',
    time: '10:30 AM',
    location: 'DU North Campus',
    slotsLeft: 48,
  },
  {
    id: '3',
    day: '25',
    month: 'May',
    title: 'Corporate Camp',
    time: '11:00 AM',
    location: 'Cyber Hub, Tower B',
    slotsLeft: 16,
  },
];

export default function UpcomingCamps() {
  return (
    <View className="mx-4 mt-6 bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
      {/* Header */}
      <Text className="text-neutral-800 font-bold text-lg">Upcoming camps</Text>
      <Text className="text-neutral-400 text-xs mt-0.5 mb-4">Reserve a slot in advance</Text>

      {/* Camp list */}
      {camps.map((camp, index) => (
        <View
          key={camp.id}
          className={`bg-neutral-50 rounded-xl p-4 ${index < camps.length - 1 ? 'mb-3' : ''}`}
        >
          <View className="flex-row">
            {/* Date badge */}
            <View className="bg-red-50 rounded-xl w-14 h-14 items-center justify-center mr-4">
              <Text className="text-primary-500 font-bold text-lg leading-5">{camp.day}</Text>
              <Text className="text-primary-500 text-xs">{camp.month}</Text>
            </View>

            {/* Details */}
            <View className="flex-1">
              <Text className="text-neutral-800 font-semibold text-sm">{camp.title}</Text>
              <View className="flex-row items-center mt-1.5 gap-3">
                <View className="flex-row items-center">
                  <Clock size={12} color="#A8A29E" />
                  <Text className="text-neutral-400 text-xs ml-1">{camp.time}</Text>
                </View>
                <View className="flex-row items-center">
                  <MapPin size={12} color="#A8A29E" />
                  <Text className="text-neutral-400 text-xs ml-1">{camp.location}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View className="flex-row justify-between items-center mt-3 pt-3 border-t border-neutral-200">
            <Text className="text-neutral-500 text-xs">{camp.slotsLeft} slots left</Text>
            <TouchableOpacity className="flex-row items-center" activeOpacity={0.7}>
              <Text className="text-primary-500 text-sm font-medium">Reserve</Text>
              <ChevronRight size={14} color="#E03131" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

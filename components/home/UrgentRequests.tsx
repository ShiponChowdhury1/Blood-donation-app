import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react-native';
import Badge from '../ui/Badge';

type UrgencyLevel = 'critical' | 'urgent' | 'normal';

interface Request {
  id: string;
  name: string;
  bloodGroup: string;
  urgency: UrgencyLevel;
  hospital: string;
  distance: string;
  time: string;
}

const requests: Request[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    bloodGroup: 'O+',
    urgency: 'critical',
    hospital: 'City Hospital',
    distance: '2.4 km',
    time: '10 min ago',
  },
  {
    id: '2',
    name: 'Anita Desai',
    bloodGroup: 'B-',
    urgency: 'urgent',
    hospital: 'Apollo Hospital',
    distance: '4.1 km',
    time: '1 hr ago',
  },
  {
    id: '3',
    name: 'Mohammad Ali',
    bloodGroup: 'AB+',
    urgency: 'normal',
    hospital: 'Max Care',
    distance: '5.8 km',
    time: '3 hr ago',
  },
];

const urgencyLabels: Record<UrgencyLevel, string> = {
  critical: 'Critical',
  urgent: 'Urgent',
  normal: 'Normal',
};

function BloodGroupAvatar({ group, urgency }: { group: string; urgency: UrgencyLevel }) {
  const bgColors: Record<UrgencyLevel, string> = {
    critical: 'bg-red-100',
    urgent: 'bg-orange-100',
    normal: 'bg-purple-100',
  };
  const textColors: Record<UrgencyLevel, string> = {
    critical: 'text-red-600',
    urgent: 'text-orange-600',
    normal: 'text-purple-600',
  };

  return (
    <View className={`w-12 h-12 rounded-full ${bgColors[urgency]} items-center justify-center relative`}>
      <Text className={`font-bold text-sm ${textColors[urgency]}`}>{group}</Text>
      {urgency === 'critical' && (
        <View className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      )}
    </View>
  );
}

export default function UrgentRequests() {
  return (
    <View className="mx-4 mt-6 bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
      {/* Header */}
      <View className="flex-row justify-between items-start mb-1">
        <View>
          <Text className="text-neutral-800 font-bold text-lg">Urgent requests near you</Text>
          <Text className="text-neutral-400 text-xs mt-0.5">Updated just now · within 6 km</Text>
        </View>
        <TouchableOpacity className="flex-row items-center" activeOpacity={0.7}>
          <Text className="text-primary-500 text-sm font-medium">View all</Text>
          <ChevronRight size={14} color="#E03131" />
        </TouchableOpacity>
      </View>

      {/* Request list */}
      {requests.map((request, index) => (
        <View
          key={request.id}
          className={`flex-row items-center py-4 ${
            index < requests.length - 1 ? 'border-b border-neutral-50' : ''
          }`}
        >
          {/* Avatar */}
          <BloodGroupAvatar group={request.bloodGroup} urgency={request.urgency} />

          {/* Details */}
          <View className="flex-1 ml-3">
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-800 font-semibold text-sm">{request.name}</Text>
              <Badge label={urgencyLabels[request.urgency]} variant={request.urgency} />
            </View>
            <View className="flex-row items-center mt-1.5 gap-3">
              <View className="flex-row items-center">
                <MapPin size={12} color="#A8A29E" />
                <Text className="text-neutral-400 text-xs ml-1">{request.hospital}</Text>
              </View>
              <Text className="text-neutral-300 text-xs">·</Text>
              <Text className="text-neutral-400 text-xs">{request.distance}</Text>
              <View className="flex-row items-center">
                <Clock size={12} color="#A8A29E" />
                <Text className="text-neutral-400 text-xs ml-1">{request.time}</Text>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              className="bg-neutral-800 px-4 py-2 rounded-lg"
              activeOpacity={0.8}
            >
              <Text className="text-white text-xs font-semibold">Respond</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-9 h-9 rounded-lg border border-neutral-200 items-center justify-center"
              activeOpacity={0.7}
            >
              <Phone size={14} color="#44403C" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

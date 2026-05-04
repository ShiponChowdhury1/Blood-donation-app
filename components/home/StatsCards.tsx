import React from 'react';
import { View, Text } from 'react-native';
import { Heart, Droplet, Activity, TrendingUp } from 'lucide-react-native';

const stats = [
  {
    icon: Heart,
    value: '12,486',
    label: 'Active donors',
    change: '+8.2%',
    bgColor: 'bg-red-50',
    iconColor: '#E03131',
    changeColor: 'text-red-500',
  },
  {
    icon: Droplet,
    value: '342',
    label: 'Units this week',
    change: '+12%',
    bgColor: 'bg-orange-50',
    iconColor: '#F59E0B',
    changeColor: 'text-orange-500',
  },
  {
    icon: Activity,
    value: '1,026',
    label: 'Lives saved',
    change: '+18%',
    bgColor: 'bg-green-50',
    iconColor: '#22C55E',
    changeColor: 'text-green-500',
  },
  {
    icon: TrendingUp,
    value: '47',
    label: 'Open requests',
    change: 'Live',
    bgColor: 'bg-blue-50',
    iconColor: '#3B82F6',
    changeColor: 'text-blue-500',
  },
];

export default function StatsCards() {
  return (
    <View className="flex-row flex-wrap mx-4 mt-5 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <View
            key={index}
            className={`${stat.bgColor} rounded-2xl p-4 flex-1 min-w-[45%]`}
          >
            <View className="flex-row justify-between items-start mb-3">
              <Icon size={20} color={stat.iconColor} />
              <Text className={`text-xs font-semibold ${stat.changeColor}`}>{stat.change}</Text>
            </View>
            <Text className="text-neutral-800 font-bold text-xl">{stat.value}</Text>
            <Text className="text-neutral-500 text-xs mt-0.5">{stat.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

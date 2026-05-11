import { Calendar, Clock, MapPin, Users } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const mockCamps = [
  {
    id: 1,
    name: "Red Crescent Blood Camp",
    location: "Dhaka Medical College",
    date: "2024-05-15",
    time: "09:00 AM - 04:00 PM",
    slots: 45,
    available: 12,
    organizer: "Red Crescent Society",
  },
  {
    id: 2,
    name: "Summer Donation Drive",
    location: "Gulshan Community Center",
    date: "2024-05-18",
    time: "10:00 AM - 03:00 PM",
    slots: 60,
    available: 28,
    organizer: "Blood Bank Bangladesh",
  },
  {
    id: 3,
    name: "Corporate Blood Drive",
    location: "BRAC Head Office, Kawran Bazar",
    date: "2024-05-20",
    time: "08:00 AM - 02:00 PM",
    slots: 40,
    available: 5,
    organizer: "BRAC",
  },
  {
    id: 4,
    name: "Weekend Mega Camp",
    location: "Shahbag Park",
    date: "2024-05-22",
    time: "08:00 AM - 06:00 PM",
    slots: 100,
    available: 42,
    organizer: "Ministry of Health",
  },
];

export default function CampsList() {
  return (
    <View className="px-4 py-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-bold text-neutral-800">
          Upcoming Camps
        </Text>
        <TouchableOpacity
          className="px-3 py-1.5 bg-primary-500 rounded-full"
          activeOpacity={0.7}
        >
          <Text className="text-white text-xs font-semibold">View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {mockCamps.map((camp) => (
          <TouchableOpacity
            key={camp.id}
            className="bg-white rounded-lg p-4 mb-3 border border-neutral-100 active:bg-neutral-50"
            activeOpacity={0.7}
          >
            {/* Camp Name */}
            <Text className="text-neutral-800 font-bold text-base mb-2">
              {camp.name}
            </Text>

            {/* Organizer */}
            <Text className="text-neutral-500 text-xs mb-3">
              by {camp.organizer}
            </Text>

            {/* Location */}
            <View className="flex-row items-center gap-1.5 mb-2">
              <MapPin size={14} color="#78716C" />
              <Text className="text-neutral-600 text-sm flex-1">
                {camp.location}
              </Text>
            </View>

            {/* Date */}
            <View className="flex-row items-center gap-1.5 mb-2">
              <Calendar size={14} color="#78716C" />
              <Text className="text-neutral-600 text-sm">{camp.date}</Text>
            </View>

            {/* Time */}
            <View className="flex-row items-center gap-1.5 mb-3">
              <Clock size={14} color="#78716C" />
              <Text className="text-neutral-600 text-sm">{camp.time}</Text>
            </View>

            {/* Slots Info */}
            <View className="bg-neutral-50 rounded-lg p-3 mb-3">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1.5">
                  <Users size={14} color="#44403C" />
                  <Text className="text-neutral-700 text-sm font-semibold">
                    {camp.available}/{camp.slots} Slots Available
                  </Text>
                </View>
                <View className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <View
                    className="h-full bg-green-500"
                    style={{
                      width: `${(camp.available / camp.slots) * 100}%`,
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Action Button */}
            <TouchableOpacity
              className={`py-2.5 rounded-lg items-center ${
                camp.available > 0 ? "bg-primary-500" : "bg-neutral-300"
              }`}
              disabled={camp.available === 0}
              activeOpacity={0.7}
            >
              <Text
                className={`font-semibold text-sm ${
                  camp.available > 0 ? "text-white" : "text-neutral-600"
                }`}
              >
                {camp.available > 0 ? "Reserve Slot" : "No Slots Available"}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

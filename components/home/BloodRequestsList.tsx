import { AlertCircle, Calendar, MapPin } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const mockRequests = [
  {
    id: 1,
    bloodType: "O+",
    units: 2,
    location: "City Hospital, Dhaka",
    date: "2024-05-12",
    urgency: "URGENT",
    patient: "John Doe",
    distance: "2.5 km",
  },
  {
    id: 2,
    bloodType: "B-",
    units: 1,
    location: "Apollo Hospital, Dhaka",
    date: "2024-05-13",
    urgency: "NORMAL",
    patient: "Jane Smith",
    distance: "5.2 km",
  },
  {
    id: 3,
    bloodType: "AB+",
    units: 3,
    location: "Medical Center, Gulshan",
    date: "2024-05-14",
    urgency: "URGENT",
    patient: "Ahmed Khan",
    distance: "8.1 km",
  },
  {
    id: 4,
    bloodType: "A+",
    units: 1,
    location: "Square Hospital",
    date: "2024-05-15",
    urgency: "NORMAL",
    patient: "Sara Ahmed",
    distance: "3.7 km",
  },
];

export default function BloodRequestsList() {
  return (
    <View className="px-4 py-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-bold text-neutral-800">
          Blood Requests
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
        {mockRequests.map((request) => (
          <TouchableOpacity
            key={request.id}
            className="bg-white rounded-lg p-4 mb-3 border border-neutral-100 active:bg-neutral-50"
            activeOpacity={0.7}
          >
            {/* Top Row */}
            <View className="flex-row items-center justify-between mb-2">
              <View className="flex-row items-center gap-2">
                <View
                  className={`px-3 py-1 rounded-full ${
                    request.bloodType.includes("+")
                      ? "bg-red-100"
                      : "bg-blue-100"
                  }`}
                >
                  <Text
                    className={`font-bold text-sm ${
                      request.bloodType.includes("+")
                        ? "text-red-700"
                        : "text-blue-700"
                    }`}
                  >
                    {request.bloodType}
                  </Text>
                </View>
                <Text className="text-neutral-600 font-semibold">
                  {request.units} units
                </Text>
              </View>

              {request.urgency === "URGENT" && (
                <View className="flex-row items-center gap-1 bg-red-50 px-2 py-1 rounded">
                  <AlertCircle size={14} color="#E03131" />
                  <Text className="text-red-600 text-xs font-bold">
                    {request.urgency}
                  </Text>
                </View>
              )}
            </View>

            {/* Patient Name */}
            <Text className="text-neutral-700 font-semibold mb-2">
              {request.patient}
            </Text>

            {/* Location */}
            <View className="flex-row items-center gap-1.5 mb-2">
              <MapPin size={14} color="#78716C" />
              <Text className="text-neutral-600 text-sm flex-1">
                {request.location}
              </Text>
              <Text className="text-neutral-500 text-xs bg-neutral-100 px-2 py-1 rounded">
                {request.distance}
              </Text>
            </View>

            {/* Date */}
            <View className="flex-row items-center gap-1.5">
              <Calendar size={14} color="#78716C" />
              <Text className="text-neutral-600 text-sm">{request.date}</Text>
            </View>

            {/* Action Button */}
            <TouchableOpacity
              className="mt-3 py-2 bg-primary-500 rounded-lg items-center"
              activeOpacity={0.7}
            >
              <Text className="text-white font-semibold text-sm">
                I Can Help
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

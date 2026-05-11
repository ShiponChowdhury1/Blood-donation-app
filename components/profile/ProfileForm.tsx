import { Check, Lock, Mail, User } from "lucide-react-native";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [updateMessage, setUpdateMessage] = useState("");

  const handleUpdateProfile = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      Alert.alert("Error", "Invalid email address");
      return;
    }

    setUpdateMessage("Profile updated successfully!");
    setIsEditing(false);

    setTimeout(() => {
      setUpdateMessage("");
    }, 3000);
  };

  const handleChangePassword = () => {
    if (!password.current || !password.new || !password.confirm) {
      Alert.alert("Error", "Please fill all password fields");
      return;
    }

    if (password.new !== password.confirm) {
      Alert.alert("Error", "New passwords do not match");
      return;
    }

    if (password.new.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    Alert.alert("Success", "Password changed successfully!");
    setPassword({ current: "", new: "", confirm: "" });
    setShowPasswordModal(false);
  };

  return (
    <ScrollView
      className="flex-1 px-4 py-6"
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View className="items-center mb-6">
        <View className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 items-center justify-center mb-4">
          <Text className="text-white font-bold text-3xl">
            {formData.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text className="text-xl font-bold text-neutral-800">
          {formData.name}
        </Text>
        <Text className="text-sm text-neutral-500">{formData.email}</Text>
      </View>

      {/* Success Message */}
      {updateMessage && (
        <View className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex-row items-center gap-2">
          <Check size={16} color="#22863A" />
          <Text className="text-green-700 font-semibold text-sm flex-1">
            {updateMessage}
          </Text>
        </View>
      )}

      {/* Personal Information Section */}
      <View className="bg-white rounded-lg p-4 mb-4 border border-neutral-100">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold text-neutral-800">
            Personal Information
          </Text>
          {!isEditing && (
            <TouchableOpacity
              onPress={() => setIsEditing(true)}
              activeOpacity={0.7}
            >
              <Text className="text-primary-500 font-semibold text-sm">
                Edit
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Name Field */}
        <View className="mb-4">
          <View className="flex-row items-center bg-neutral-50 rounded-lg px-3 py-3 border border-neutral-200">
            <User size={18} color="#78716C" />
            <TextInput
              className="flex-1 ml-2 text-neutral-800 text-base"
              placeholder="Full Name"
              placeholderTextColor="#A8A29E"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              editable={isEditing}
            />
          </View>
          <Text className="text-xs text-neutral-500 mt-1">Full Name</Text>
        </View>

        {/* Email Field */}
        <View className="mb-4">
          <View className="flex-row items-center bg-neutral-50 rounded-lg px-3 py-3 border border-neutral-200">
            <Mail size={18} color="#78716C" />
            <TextInput
              className="flex-1 ml-2 text-neutral-800 text-base"
              placeholder="Email Address"
              placeholderTextColor="#A8A29E"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              editable={isEditing}
              keyboardType="email-address"
            />
          </View>
          <Text className="text-xs text-neutral-500 mt-1">Email Address</Text>
        </View>

        {/* Action Buttons */}
        {isEditing && (
          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 bg-primary-500 rounded-lg py-3 items-center"
              onPress={handleUpdateProfile}
              activeOpacity={0.7}
            >
              <Text className="text-white font-semibold">Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-neutral-200 rounded-lg py-3 items-center"
              onPress={() => setIsEditing(false)}
              activeOpacity={0.7}
            >
              <Text className="text-neutral-700 font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Security Section */}
      <View className="bg-white rounded-lg p-4 mb-4 border border-neutral-100">
        <Text className="text-lg font-bold text-neutral-800 mb-4">
          Security
        </Text>

        <TouchableOpacity
          className="flex-row items-center justify-between bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-200"
          onPress={() => setShowPasswordModal(true)}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center gap-3">
            <Lock size={18} color="#78716C" />
            <View>
              <Text className="text-neutral-800 font-semibold">
                Change Password
              </Text>
              <Text className="text-neutral-500 text-xs">
                Update your password regularly
              </Text>
            </View>
          </View>
          <Text className="text-neutral-400">›</Text>
        </TouchableOpacity>
      </View>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <View className="bg-white rounded-lg p-4 mb-4 border border-neutral-100">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-neutral-800">
              Change Password
            </Text>
            <TouchableOpacity
              onPress={() => setShowPasswordModal(false)}
              activeOpacity={0.7}
            >
              <Text className="text-neutral-400 text-xl">×</Text>
            </TouchableOpacity>
          </View>

          {/* Current Password */}
          <View className="mb-4">
            <View className="flex-row items-center bg-neutral-50 rounded-lg px-3 py-3 border border-neutral-200">
              <Lock size={18} color="#78716C" />
              <TextInput
                className="flex-1 ml-2 text-neutral-800 text-base"
                placeholder="Current Password"
                placeholderTextColor="#A8A29E"
                secureTextEntry
                value={password.current}
                onChangeText={(text) =>
                  setPassword({ ...password, current: text })
                }
              />
            </View>
            <Text className="text-xs text-neutral-500 mt-1">
              Current Password
            </Text>
          </View>

          {/* New Password */}
          <View className="mb-4">
            <View className="flex-row items-center bg-neutral-50 rounded-lg px-3 py-3 border border-neutral-200">
              <Lock size={18} color="#78716C" />
              <TextInput
                className="flex-1 ml-2 text-neutral-800 text-base"
                placeholder="New Password"
                placeholderTextColor="#A8A29E"
                secureTextEntry
                value={password.new}
                onChangeText={(text) => setPassword({ ...password, new: text })}
              />
            </View>
            <Text className="text-xs text-neutral-500 mt-1">New Password</Text>
          </View>

          {/* Confirm Password */}
          <View className="mb-4">
            <View className="flex-row items-center bg-neutral-50 rounded-lg px-3 py-3 border border-neutral-200">
              <Lock size={18} color="#78716C" />
              <TextInput
                className="flex-1 ml-2 text-neutral-800 text-base"
                placeholder="Confirm Password"
                placeholderTextColor="#A8A29E"
                secureTextEntry
                value={password.confirm}
                onChangeText={(text) =>
                  setPassword({ ...password, confirm: text })
                }
              />
            </View>
            <Text className="text-xs text-neutral-500 mt-1">
              Confirm Password
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 bg-primary-500 rounded-lg py-3 items-center"
              onPress={handleChangePassword}
              activeOpacity={0.7}
            >
              <Text className="text-white font-semibold">Update Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-neutral-200 rounded-lg py-3 items-center"
              onPress={() => setShowPasswordModal(false)}
              activeOpacity={0.7}
            >
              <Text className="text-neutral-700 font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Account Info */}
      <View className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <Text className="text-neutral-800 font-semibold text-sm">
          Account Member Since: May 10, 2024
        </Text>
        <Text className="text-neutral-600 text-xs mt-2">
          Total Donations: 5 times
        </Text>
      </View>

      <View className="h-6" />
    </ScrollView>
  );
}

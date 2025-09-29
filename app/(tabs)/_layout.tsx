import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

type TabBarItemProps = {
  name: string;
  title: string;
  color: string;
  focused: boolean;
};

const TabBarItem = ({ name, title, color, focused }: TabBarItemProps) => (
  <View
    className={`flex flex-row items-center justify-center
    }`}
    style={{ minWidth: 78 }}
  >
    <Ionicons name={name as any} size={20} color={focused ? "#fff" : color} />
    <Text
      className={`ml-2 text-xs ${
        focused ? "text-white font-bold" : "black font-bold"
      }`}
      numberOfLines={1}
      ellipsizeMode="tail"
      style={{ maxWidth: 48 }}
    >
      {title}
    </Text>
  </View>
);

const optionsConfig = (iconName: string, title: string) => ({
  headerShown: false,
  tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
    <TabBarItem
      name={iconName}
      title={title}
      color={"#000"}
      focused={focused}
    />
  ),
  tabBarLabel: () => null,
});

const _Layout = () => (
  <Tabs
    screenOptions={{
      tabBarStyle: {
        height: 60,
        paddingVertical: 8,
        backgroundColor: "#43e5a2",
        borderRadius: 20,
        marginHorizontal: 8,
        marginBottom: 16,
        paddingTop: 8,
      },
    }}
  >
    <Tabs.Screen
      name="listen"
      options={optionsConfig("headset-outline", "Listen")}
    />
    <Tabs.Screen name="read" options={optionsConfig("book-outline", "Read")} />
  </Tabs>
);

export default _Layout;

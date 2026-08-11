import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/theme';
import { Home, Wrench, Sliders, Info } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primaryYellow,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'INICIO',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : undefined}>
              <Home size={20} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="catalog"
        options={{
          title: 'CATÁLOGO',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : undefined}>
              <Wrench size={20} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="detail"
        options={{
          title: 'ESPECIFICACIONES',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : undefined}>
              <Sliders size={20} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'INFO',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : undefined}>
              <Info size={20} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.navBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.navBorder,
    height: 65,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  activeIconBg: {
    backgroundColor: 'rgba(255, 205, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
});

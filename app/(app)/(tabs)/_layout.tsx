import { Tabs } from 'expo-router';
import { House, Package } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="visitas"
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => <Package size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

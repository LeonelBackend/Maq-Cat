import { Stack } from 'expo-router';
import { MachineProvider } from '../context/MachineContext';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <MachineProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </MachineProvider>
  );
}

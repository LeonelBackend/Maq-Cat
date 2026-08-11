import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { MachineCard } from '../../components/MachineCard';
import { MACHINES_DATA, Machine } from '../../data/machinesData';
import { useMachine } from '../../context/MachineContext';

export default function CatalogScreen() {
  const router = useRouter();
  const { setSelectedMachine } = useMachine();

  const handleSelectMachine = (machine: Machine) => {
    setSelectedMachine(machine);
    router.push('/detail');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navBackground} />
      <IndustrialHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.title}>CATÁLOGO DE EQUIPOS</Text>
          <Text style={styles.subtitle}>
            Selecciona una categoría de maquinaria para ver especificaciones y disponibilidad
            de despliegue.
          </Text>
        </View>

        <View style={styles.cardsList}>
          {MACHINES_DATA.map((machine) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onPressDetails={handleSelectMachine}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: 24,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
  cardsList: {
    paddingBottom: 20,
  },
});

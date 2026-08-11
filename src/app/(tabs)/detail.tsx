import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { SpecBlock } from '../../components/SpecBlock';
import { useMachine } from '../../context/MachineContext';
import { MACHINES_DATA } from '../../data/machinesData';
import { Heart } from 'lucide-react-native';

export default function DetailScreen() {
  const router = useRouter();
  const { selectedMachine, setSelectedMachine } = useMachine();

  const machine = selectedMachine || MACHINES_DATA[3]; // Default Cat 797F

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navBackground} />
      <IndustrialHeader
        showBack
        onBackPress={() => router.push('/catalog')}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Machinery Banner */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: machine.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.categoryTag}>
            <Text style={styles.categoryTagText}>{machine.categoryTag}</Text>
          </View>
        </View>

        {/* Title and Model Header */}
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.modelTitle}>
              {machine.modelName.toUpperCase().includes('CAT')
                ? `CATERPILLAR ${machine.modelName.replace(/cat\s*/i, '')}`
                : machine.modelName}
            </Text>
            <Text style={styles.categorySubtitle}>{machine.shortDesc}</Text>
          </View>

          <TouchableOpacity style={styles.favoriteBtn}>
            <Heart color={Colors.textMuted} size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Section: Technical Specs */}
        <Text style={styles.sectionHeader}>ESPECIFICACIONES TÉCNICAS</Text>

        <SpecBlock
          type="power"
          label="MÓDULO DE POTENCIA"
          value={machine.specs.powerModule}
          subValue={machine.specs.powerModuleDesc}
        />

        <SpecBlock
          type="performance"
          label="RENDIMIENTO BRUTO"
          value={machine.specs.grossPerformance}
          subValue={machine.specs.grossPerformanceDesc}
        />

        <SpecBlock
          type="payload"
          label={
            machine.slug === 'camiones-mineros'
              ? 'CARGA ÚTIL NOMINAL'
              : 'PESO OPERATIVO'
          }
          value={machine.specs.nominalPayload}
          subValue={machine.specs.nominalPayloadDesc}
        />

        {/* Section: Operational Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryTitleRow}>
            <View style={styles.yellowIndicator} />
            <Text style={styles.summaryTitle}>RESUMEN OPERATIVO</Text>
          </View>

          <Text style={styles.summaryText}>{machine.operationalSummary}</Text>
        </View>

        {/* Selector chips for quick switching between 4 machines */}
        <View style={styles.switcherSection}>
          <Text style={styles.switcherTitle}>EXPLORAR OTRO EQUIPO:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsScroll}>
            {MACHINES_DATA.map((m) => (
              <TouchableOpacity
                key={m.id}
                style={[
                  styles.chip,
                  m.id === machine.id && styles.chipActive,
                ]}
                onPress={() => setSelectedMachine(m)}
              >
                <Text
                  style={[
                    styles.chipText,
                    m.id === machine.id && styles.chipTextActive,
                  ]}
                >
                  {m.modelName}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    paddingBottom: 40,
  },
  imageContainer: {
    height: 240,
    width: '100%',
    position: 'relative',
    backgroundColor: '#000000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryTag: {
    position: 'absolute',
    bottom: 14,
    left: 16,
    backgroundColor: Colors.primaryYellow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
  },
  categoryTagText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modelTitle: {
    color: Colors.textPrimary,
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 4,
  },
  categorySubtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  favoriteBtn: {
    padding: 8,
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.cardBorder,
    marginHorizontal: 20,
    marginVertical: 14,
  },
  sectionHeader: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginHorizontal: 20,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  summaryContainer: {
    backgroundColor: Colors.cardBackground,
    marginHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 18,
    marginTop: 10,
    marginBottom: 24,
  },
  summaryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  yellowIndicator: {
    width: 14,
    height: 3,
    backgroundColor: Colors.primaryYellow,
    marginRight: 8,
  },
  summaryTitle: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  summaryText: {
    color: Colors.textPrimary,
    fontSize: 13,
    lineHeight: 21,
    opacity: 0.9,
  },
  switcherSection: {
    paddingHorizontal: 20,
    marginTop: 6,
  },
  switcherTitle: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  chipsScroll: {
    flexDirection: 'row',
  },
  chip: {
    backgroundColor: Colors.cardBackground,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    marginRight: 10,
  },
  chipActive: {
    borderColor: Colors.primaryYellow,
    backgroundColor: 'rgba(255, 205, 0, 0.12)',
  },
  chipText: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
  },
  chipTextActive: {
    color: Colors.primaryYellow,
  },
});

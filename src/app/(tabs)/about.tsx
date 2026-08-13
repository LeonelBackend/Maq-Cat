import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { Info, ShieldCheck, Cpu } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navBackground} />
      <IndustrialHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Brand Banner Badge (Replaces operator avatar) */}
        <View style={styles.brandHeroCard}>
          <View style={styles.brandBadgeIcon}>
            <Cpu color={Colors.primaryYellow} size={32} />
          </View>
          <Text style={styles.brandTitle}>MAQ-CAT PLATAFORMA</Text>
          <Text style={styles.brandSubtitle}>GESTIÓN & CONSULTA DE MAQUINARIA PESADA</Text>
          
          <View style={styles.statusPill}>
            <View style={styles.greenDot} />
            <Text style={styles.statusPillText}>SISTEMA EN LÍNEA // OFFLINE READY</Text>
          </View>
        </View>

        {/* Card: Acerca de la App */}
        <View style={styles.infoCard}>
          <View style={styles.cardHeaderRow}>
            <Info color={Colors.primaryYellow} size={22} />
            <Text style={styles.cardTitle}>ACERCA DE LA APP</Text>
          </View>

          <Text style={styles.descriptionText}>
            MAQ-CAT es la plataforma definitiva para la gestión, mantenimiento y supervisión
            técnica de maquinaria pesada Caterpillar en proyectos de construcción y gran minería.
            Acceda a catálogos detallados y fichas de rendimiento.
          </Text>

          {/* Metrics Grid */}
          <View style={styles.metricsGrid}>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>VERSIÓN</Text>
              <Text style={styles.metricValue}>v2.4.0 (Industrial)</Text>
            </View>

            <View style={styles.metricBox}>
              <ShieldCheck color={Colors.textSecondary} size={18} style={{ marginBottom: 6 }} />
              <Text style={styles.metricLabel}>ÚLTIMA ACTUALIZACIÓN</Text>
              <Text style={styles.metricValue}>24 de oct. de 2023</Text>
            </View>
          </View>
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
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 50,
  },
  brandHeroCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  brandBadgeIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 205, 0, 0.1)',
    borderWidth: 1,
    borderColor: Colors.primaryYellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  brandTitle: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 4,
    textAlign: 'center',
  },
  brandSubtitle: {
    color: Colors.primaryYellow,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 16,
    textAlign: 'center',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A0A0C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorderHighlight,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.statusGreen,
    marginRight: 8,
  },
  statusPillText: {
    color: Colors.textSecondary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  cardTitle: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 10,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  descriptionText: {
    color: Colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 20,
    textAlign: 'center',
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#0A0A0C',
    padding: 14,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
    textAlign: 'center',
  },
  metricValue: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});

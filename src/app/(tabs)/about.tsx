import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { Info, Download, ShieldCheck, Cpu } from 'lucide-react-native';

export default function AboutScreen() {
  const handleDownload = () => {
    Alert.alert(
      'Descarga MAQ-CAT Mobile',
      'La aplicación se encuentra lista para sincronizarse en dispositivos iOS y Android.',
      [{ text: 'ENTENDIDO', style: 'default' }]
    );
  };

  const openStore = (storeName: string) => {
    Alert.alert(
      `Accediendo a ${storeName}`,
      `Redirigiendo a la tienda oficial de aplicaciones...`,
      [{ text: 'OK' }]
    );
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
            <Info color={Colors.primaryYellow} size={20} />
            <Text style={styles.cardTitle}>Acerca de la App</Text>
          </View>

          <Text style={styles.descriptionText}>
            MAQ-CAT es la plataforma definitiva para la gestión, mantenimiento y supervisión
            de maquinaria pesada. Diseñada para operar en entornos de alta exigencia, proporciona
            datos telemétricos en tiempo real, manuales técnicos de precisión y protocolos de
            seguridad críticos para operadores y jefes de flota.
          </Text>

          {/* Metrics Grid */}
          <View style={styles.metricsGrid}>
            <View style={styles.metricBox}>
              <Cpu color={Colors.textSecondary} size={18} style={{ marginBottom: 6 }} />
              <Text style={styles.metricLabel}>VERSIÓN</Text>
              <Text style={styles.metricValue}>v2.4.0 (Stable)</Text>
            </View>

            <View style={styles.metricBox}>
              <ShieldCheck color={Colors.textSecondary} size={18} style={{ marginBottom: 6 }} />
              <Text style={styles.metricLabel}>ÚLTIMA ACTUALIZACIÓN</Text>
              <Text style={styles.metricValue}>24 de oct. de 2023</Text>
            </View>
          </View>
        </View>

        {/* Action: Big Yellow Download Button */}
        <TouchableOpacity
          style={styles.downloadButton}
          activeOpacity={0.85}
          onPress={handleDownload}
        >
          <Download color="#000000" size={24} style={{ marginRight: 10 }} />
          <Text style={styles.downloadButtonText}>DESCARGAR AHORA</Text>
        </TouchableOpacity>

        {/* Store Links */}
        <View style={styles.storesRow}>
          <TouchableOpacity
            style={styles.storeBtn}
            onPress={() => openStore('Google Play')}
          >
            <Text style={styles.storeSubtext}>CONSÍGUELO EN</Text>
            <Text style={styles.storeMaintext}>Google Play</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.storeBtn}
            onPress={() => openStore('App Store')}
          >
            <Text style={styles.storeSubtext}>CONSÍGUELO EN</Text>
            <Text style={styles.storeMaintext}>App Store</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.footerText}>
            © 2026 MAQ-CAT INDUSTRIAL. TODOS LOS DERECHOS RESERVADOS.
          </Text>
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
  },
  brandSubtitle: {
    color: Colors.primaryYellow,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 16,
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
  },
  infoCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 20,
    marginBottom: 24,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardTitle: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  descriptionText: {
    color: Colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 20,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#0A0A0C',
    padding: 14,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  metricLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  metricValue: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '700',
  },
  downloadButton: {
    backgroundColor: Colors.primaryYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 2,
    marginBottom: 20,
    elevation: 4,
    shadowColor: Colors.primaryYellow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  downloadButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  storesRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  storeBtn: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
  },
  storeSubtext: {
    color: Colors.textMuted,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 2,
  },
  storeMaintext: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '800',
  },
  footerNote: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

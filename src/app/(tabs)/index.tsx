import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { ArrowRight, Activity } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  const handleExplore = () => {
    router.push('/catalog');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navBackground} />
      <IndustrialHeader />

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.heroBackground}
        resizeMode="cover"
      >
        {/* Dark gradient overlay */}
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            
            {/* Title Section */}
            <View style={styles.titleWrapper}>
              <Text style={styles.mainTitle}>THE POWER HYDRA</Text>
              <Text style={styles.subtitle}>
                Equipos pesados de última generación para los terrenos más exigentes.
                Precisión, fuerza y rendimiento industrial.
              </Text>
            </View>

            {/* CTA Button */}
            <TouchableOpacity
              style={styles.ctaButton}
              activeOpacity={0.85}
              onPress={handleExplore}
            >
              <Text style={styles.ctaText}>EXPLORAR CATÁLOGO</Text>
              <ArrowRight color="#000000" size={20} style={{ marginLeft: 8 }} />
            </TouchableOpacity>

            {/* Telemetry Status Bar */}
            <View style={styles.statusFooter}>
              <View style={styles.telemetryBadge}>
                <Activity color={Colors.primaryYellow} size={14} />
                <Text style={styles.telemetryText}>SYS.OP.1 // TELEMETRÍA ACTIVA</Text>
              </View>
            </View>

          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  heroBackground: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 13, 15, 0.68)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  titleWrapper: {
    marginBottom: 32,
  },
  mainTitle: {
    color: Colors.primaryYellow,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 42,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    color: Colors.textPrimary,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: Colors.primaryYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 2,
    marginBottom: 32,
    elevation: 4,
    shadowColor: Colors.primaryYellow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
  },
  statusFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  telemetryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 22, 26, 0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  telemetryText: {
    color: Colors.textSecondary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 6,
  },
});

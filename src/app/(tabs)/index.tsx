import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { IndustrialHeader } from '../../components/IndustrialHeader';
import { ArrowRight } from 'lucide-react-native';

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
        source={require('../../../assets/images/hero-cat-shovel.png')}
        style={styles.heroBackground}
        imageStyle={styles.backgroundImageStyle}
        resizeMode="contain"
      >
        {/* Dark gradient overlay */}
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            
            {/* Title Section (Logo al centro arriba de THE POWER HYDRA) */}
            <View style={styles.titleWrapper}>
              <View style={styles.heroLogoBadge}>
                <Image
                  source={require('../../../assets/images/logo-maq-cat.png')}
                  style={styles.heroLogoImage}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.mainTitle}>THE POWER HYDRA</Text>
              <Text style={styles.subtitle}>
                Equipos pesados Caterpillar de última generación para los terrenos más exigentes.
                Precisión, fuerza y rendimiento industrial, construcción y gran mineria .
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
    backgroundColor: '#0F0F12',
  },
  backgroundImageStyle: {
    opacity: 0.88,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 13, 15, 0.35)',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    marginTop: 12,
    alignItems: 'center',
  },
  heroLogoBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
    shadowColor: Colors.primaryYellow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  heroLogoImage: {
    width: 170,
    height: 38,
  },
  mainTitle: {
    color: Colors.primaryYellow,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 42,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 14,
    textAlign: 'center',
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
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: Colors.primaryYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 2,
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
});

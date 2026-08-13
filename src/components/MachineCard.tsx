import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/theme';
import { Machine } from '../data/machinesData';

interface MachineCardProps {
  machine: Machine;
  onPressDetails: (machine: Machine) => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  machine,
  onPressDetails,
}) => {
  const imageSource = typeof machine.imageUrl === 'string' ? { uri: machine.imageUrl } : machine.imageUrl;
  const isRequireImage = typeof machine.imageUrl !== 'string';

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.imageWrapper, isRequireImage && styles.whiteBgWrapper]}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode={isRequireImage ? 'contain' : 'cover'}
        />
        {machine.isFeatured && (
          <View style={styles.featuredTag}>
            <Text style={styles.featuredText}>DESTACADO</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.categoryTitle}>{machine.categoryTitle}</Text>
        <Text style={styles.modelName}>
          Modelo: <Text style={styles.modelHighlight}>{machine.modelName}</Text>
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {machine.shortDesc}
        </Text>

        <View style={styles.specsDivider} />

        <View style={styles.specsRow}>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>
              {machine.slug === 'camiones-mineros' ? 'Carga Útil' : 'Peso Operativo'}
            </Text>
            <Text style={styles.specValue}>{machine.specs.operatingWeight}</Text>
          </View>

          <View style={styles.specItemRight}>
            <Text style={styles.specLabel}>
              {machine.slug === 'camiones-mineros' ? 'Potencia Bruta' : 'Potencia Neta'}
            </Text>
            <Text style={styles.specValue}>{machine.specs.netPower}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.8}
          onPress={() => onPressDetails(machine)}
        >
          <Text style={styles.ctaText}>VER DETALLES  →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageWrapper: {
    height: 180,
    width: '100%',
    backgroundColor: Colors.navBackground,
    overflow: 'hidden',
    position: 'relative',
  },
  whiteBgWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  featuredTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.primaryYellow,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
  },
  featuredText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  content: {
    padding: 16,
  },
  categoryTitle: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 4,
  },
  modelName: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
  },
  modelHighlight: {
    color: Colors.primaryYellow,
    fontWeight: '700',
  },
  description: {
    color: Colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 14,
  },
  specsDivider: {
    height: 1,
    backgroundColor: Colors.cardBorder,
    marginBottom: 12,
  },
  specsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  specItem: {
    flex: 1,
  },
  specItemRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  specLabel: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },
  specValue: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '700',
  },
  ctaButton: {
    backgroundColor: Colors.primaryYellow,
    paddingVertical: 12,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});

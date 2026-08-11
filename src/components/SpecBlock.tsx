import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';
import { Cpu, Gauge, Weight } from 'lucide-react-native';

interface SpecBlockProps {
  label: string;
  value: string;
  subValue: string;
  type: 'power' | 'performance' | 'payload';
}

export const SpecBlock: React.FC<SpecBlockProps> = ({
  label,
  value,
  subValue,
  type,
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'power':
        return <Cpu color={Colors.textMuted} size={24} />;
      case 'performance':
        return <Gauge color={Colors.textMuted} size={24} />;
      case 'payload':
        return <Weight color={Colors.textMuted} size={24} />;
      default:
        return <Cpu color={Colors.textMuted} size={24} />;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>{label}</Text>
        {renderIcon()}
      </View>

      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subValue}>{subValue}</Text>

      <View style={styles.yellowBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 4,
    borderColor: Colors.cardBorder,
    borderWidth: 1,
    padding: 16,
    marginBottom: 14,
    position: 'relative',
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  value: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  subValue: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: '500',
  },
  yellowBar: {
    height: 3,
    backgroundColor: Colors.primaryYellow,
    width: '45%',
    marginTop: 14,
    borderRadius: 2,
  },
});

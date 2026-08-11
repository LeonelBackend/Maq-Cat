import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/theme';
import { Menu, ShieldCheck } from 'lucide-react-native';

interface IndustrialHeaderProps {
  showBack?: boolean;
  onBackPress?: () => void;
  title?: string;
}

export const IndustrialHeader: React.FC<IndustrialHeaderProps> = ({
  showBack,
  onBackPress,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity style={styles.iconBtn} onPress={onBackPress}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.menuIconContainer}>
            <Menu color={Colors.textSecondary} size={22} />
          </View>
        )}
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoText}>MAQ</Text>
          <Text style={styles.logoTextYellow}>-CAT</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.shieldIconContainer}>
          <ShieldCheck color={Colors.primaryYellow} size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.navBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBorder,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  menuIconContainer: {
    padding: 4,
  },
  iconBtn: {
    padding: 6,
  },
  backArrow: {
    color: Colors.primaryYellow,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.cardBorderHighlight,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  logoTextYellow: {
    color: Colors.primaryYellow,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  shieldIconContainer: {
    backgroundColor: 'rgba(255, 205, 0, 0.1)',
    padding: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 205, 0, 0.3)',
  },
});

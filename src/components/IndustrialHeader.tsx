import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/theme';

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
  if (!showBack && !title) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity style={styles.iconBtn} onPress={onBackPress}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        {title ? <Text style={styles.headerTitle}>{title}</Text> : null}
      </View>

      <View style={styles.rightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
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
  iconBtn: {
    padding: 6,
  },
  backArrow: {
    color: Colors.primaryYellow,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
});

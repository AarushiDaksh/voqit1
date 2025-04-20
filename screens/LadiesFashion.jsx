// screens/LadiesFashion.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LadiesFashion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LADIES' FASHION</Text>
      {/* Add category items, images, etc. here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default LadiesFashion;

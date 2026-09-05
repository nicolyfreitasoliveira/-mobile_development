import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#ffffff' },
});

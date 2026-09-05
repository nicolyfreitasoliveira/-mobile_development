import { StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';

export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Mobile Development</Text>
      <Text style={styles.description}>
        Base do projeto pronta para o desenvolvimento do aplicativo.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '600', color: '#182230' },
  description: { marginTop: 12, fontSize: 16, lineHeight: 24, color: '#475467' },
});

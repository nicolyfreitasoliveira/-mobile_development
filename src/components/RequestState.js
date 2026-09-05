import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

export default function RequestState({ loading, error, onRetry }) {
  return (
    <View style={styles.container}>
      {loading ? <><ActivityIndicator size="large" /><Text>Carregando produtos...</Text></> : <>
        <Text accessibilityRole="alert" style={styles.message}>{error}</Text>
        <Button title="Tentar novamente" onPress={onRetry} />
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  message: { textAlign: 'center', color: '#b42318' },
});

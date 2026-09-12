import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from './theme';

export default function RequestState({ loading, error, onRetry }) {
  return (
    <View style={styles.container}>
      {loading ? <><ActivityIndicator size="large" color={colors.black} /><Text style={styles.loading}>Carregando produtos...</Text></> : <>
        <Text accessibilityRole="alert" style={styles.message}>{error}</Text>
        <Button title="Tentar novamente" color={colors.black} onPress={onRetry} />
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  message: { textAlign: 'center', color: colors.error, fontFamily: fonts.regular },
  loading: { color: colors.muted, fontFamily: fonts.regular },
});

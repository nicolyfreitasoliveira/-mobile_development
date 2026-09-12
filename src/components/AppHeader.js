import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from './theme';

export default function AppHeader({ options, route }) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>{options.title || route.name}</Text>
        {options.headerRight?.({ tintColor: colors.logout })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, borderBottomWidth: 1, borderBottomColor: colors.black },
  header: { minHeight: 55, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  title: { flexShrink: 1, fontFamily: fonts.medium, fontSize: 17, lineHeight: 22, color: colors.text, paddingVertical: 14 },
});

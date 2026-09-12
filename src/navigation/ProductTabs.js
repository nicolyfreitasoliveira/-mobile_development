import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../components/theme';

const Tab = createBottomTabNavigator();

export default function ProductTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarIconStyle: { display: 'none' },
      tabBarStyle: { height: 72 + insets.bottom, backgroundColor: colors.background, borderTopColor: colors.divider, borderTopWidth: 1, elevation: 0 },
      tabBarItemStyle: { padding: 0 },
      tabBarLabelPosition: 'below-icon',
      tabBarLabel: ({ focused, children }) => (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, focused && styles.activeLabel]}>{children}</Text>
          {focused && <View style={styles.indicator} />}
        </View>
      ),
    }}>
      <Tab.Screen name="Masculino" component={ProductsScreen} initialParams={{ group: 'masculino' }} />
      <Tab.Screen name="Feminino" component={ProductsScreen} initialParams={{ group: 'feminino' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: { width: '100%', height: 66, alignItems: 'center', paddingTop: 17 },
  label: { fontFamily: fonts.regular, fontSize: 15, lineHeight: 19, color: colors.muted },
  activeLabel: { fontFamily: fonts.medium, color: colors.black },
  indicator: { position: 'absolute', bottom: 0, width: 120, maxWidth: '80%', height: 3, backgroundColor: colors.black },
});

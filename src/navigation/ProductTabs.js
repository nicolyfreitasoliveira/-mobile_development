import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';

const Tab = createBottomTabNavigator();

export default function ProductTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarIconStyle: { display: 'none' }, tabBarLabelStyle: { fontSize: 14 } }}>
      <Tab.Screen name="Masculino" component={ProductsScreen} initialParams={{ group: 'masculino' }} />
      <Tab.Screen name="Feminino" component={ProductsScreen} initialParams={{ group: 'feminino' }} />
    </Tab.Navigator>
  );
}

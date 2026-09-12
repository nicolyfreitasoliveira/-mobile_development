import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductTabs from './ProductTabs';
import { logout } from '../store/authSlice';
import AppHeader from '../components/AppHeader';
import { colors, fonts } from '../components/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: (props) => <AppHeader {...props} />, contentStyle: { backgroundColor: colors.background } }}>
        {user ? (
          <Stack.Group screenOptions={{ headerRight: () => (
            <Pressable accessibilityRole="button" onPress={() => dispatch(logout())} style={{ minHeight: 44, justifyContent: 'center' }} hitSlop={8}>
              <Text style={{ fontFamily: fonts.regular, fontSize: 17, color: colors.logout }}>Sair</Text>
            </Pressable>
          ) }}>
            <Stack.Screen name="Products" component={ProductTabs} options={{ title: 'Produtos' }} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Detalhes do produto' }} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Projeto Mobile' }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

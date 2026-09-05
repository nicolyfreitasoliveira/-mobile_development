import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductTabs from './ProductTabs';
import { logout } from '../store/authSlice';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Group screenOptions={{ headerRight: () => <Button title="Sair" onPress={() => dispatch(logout())} /> }}>
            <Stack.Screen name="Products" component={ProductTabs} options={{ title: 'Produtos' }} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Detalhes do produto' }} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

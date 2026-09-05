import { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Screen from '../components/Screen';
import ProductCard from '../components/ProductCard';
import RequestState from '../components/RequestState';
import { getProductsByGroup } from '../services/products';

export default function ProductsScreen({ route, navigation }) {
  const { group } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    getProductsByGroup(group, controller.signal)
      .then((data) => { if (!controller.signal.aborted) setProducts(data); })
      .catch(() => { if (!controller.signal.aborted) setError('Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [group, attempt]);

  return (
    <Screen>
      {loading || error ? <RequestState loading={loading} error={error} onRetry={() => setAttempt((value) => value + 1)} /> : (
        <FlatList data={products} keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
          renderItem={({ item }) => <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { productId: item.id })} />} />
      )}
    </Screen>
  );
}

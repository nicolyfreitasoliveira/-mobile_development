import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import ProductPrice from '../components/ProductPrice';
import RequestState from '../components/RequestState';
import { getProductById } from '../services/products';

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    getProductById(productId, controller.signal)
      .then((data) => { if (!controller.signal.aborted) setProduct(data); })
      .catch((requestError) => {
        if (!controller.signal.aborted) setError(requestError.response?.status === 404
          ? 'Produto não encontrado.' : 'Não foi possível carregar os detalhes. Verifique sua conexão e tente novamente.');
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [productId, attempt]);

  return (
    <Screen>
      {loading || error ? <RequestState loading={loading} error={error} onRetry={() => setAttempt((value) => value + 1)} /> : product ? (
        <ScrollView contentContainerStyle={styles.content}>
          <Image source={{ uri: product.images?.[0] || product.thumbnail }} style={styles.image} resizeMode="contain" accessibilityLabel={product.title} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
        </ScrollView>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: 16, paddingBottom: 24 },
  image: { width: '100%', height: 260 },
  title: { fontSize: 24, fontWeight: '600' },
  description: { fontSize: 16, lineHeight: 24 },
});

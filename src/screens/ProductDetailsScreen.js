import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import ProductPrice from '../components/ProductPrice';
import RequestState from '../components/RequestState';
import { getProductById } from '../services/products';
import { colors, fonts } from '../components/theme';

export default function ProductDetailsScreen({ route, navigation }) {
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
      <Pressable accessibilityRole="button" accessibilityLabel="Voltar para produtos" onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>‹ Produtos</Text>
      </Pressable>
      {loading || error ? <RequestState loading={loading} error={error} onRetry={() => setAttempt((value) => value + 1)} /> : product ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.images?.[0] || product.thumbnail }} style={styles.image} resizeMode="contain" accessibilityLabel={product.title} />
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <ProductPrice price={product.price} discountPercentage={product.discountPercentage} detailed />
        </ScrollView>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: { minHeight: 55, justifyContent: 'center', alignSelf: 'flex-start' },
  backText: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 20, color: colors.black },
  content: { paddingBottom: 32 },
  imageContainer: { width: '100%', aspectRatio: 342 / 250, maxHeight: 360, borderRadius: 12, overflow: 'hidden', backgroundColor: colors.image },
  image: { width: '100%', height: '100%' },
  title: { fontFamily: fonts.medium, fontSize: 20, lineHeight: 26, color: colors.text, marginTop: 30, marginBottom: 24 },
  description: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 21, color: colors.muted, marginBottom: 16 },
});

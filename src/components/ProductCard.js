import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ProductPrice from './ProductPrice';

export default function ProductCard({ product, onPress }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`Ver detalhes de ${product.title}`} onPress={onPress} style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" accessibilityLabel={product.title} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#e4e7ec', gap: 12 },
  image: { width: 88, height: 100 },
  content: { flex: 1, justifyContent: 'center', gap: 6 },
  title: { fontSize: 16, fontWeight: '600' },
});

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ProductPrice from './ProductPrice';
import { colors, fonts } from './theme';

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
  card: { flexDirection: 'row', minHeight: 124, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.divider, gap: 4 },
  image: { width: 100, height: 100, borderRadius: 8, backgroundColor: '#f3f4f5' },
  content: { flex: 1, paddingTop: 14, paddingRight: 12, gap: 4 },
  title: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 21, minHeight: 42, color: colors.text },
});

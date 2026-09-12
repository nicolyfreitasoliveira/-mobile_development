import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from './theme';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export default function ProductPrice({ price, discountPercentage, detailed = false }) {
  return (
    <View style={detailed ? styles.details : styles.container}>
      <Text style={[styles.price, detailed && styles.detailPrice]}>Preço: {currency.format(price)}</Text>
      <Text style={[styles.discount, detailed && styles.detailDiscount]}>Desconto: {discountPercentage.toFixed(2)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 5 },
  details: { gap: 13 },
  price: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 17, color: colors.text },
  discount: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 17, color: colors.muted },
  detailPrice: { fontFamily: fonts.medium, fontSize: 18, lineHeight: 22 },
  detailDiscount: { fontSize: 16, lineHeight: 20 },
});

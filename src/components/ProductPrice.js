import { Text } from 'react-native';

export default function ProductPrice({ price, discountPercentage }) {
  return (
    <>
      <Text>Preço: US$ {price.toFixed(2)}</Text>
      <Text>Desconto: {discountPercentage.toFixed(2)}%</Text>
    </>
  );
}

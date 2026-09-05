# Mobile Development

Trabalho acadêmico em React Native com Expo SDK 57, login simulado,
produtos da DummyJSON em duas abas e detalhes de cada produto.

## Executar

Requer Node.js 22.13 ou superior, npm e Expo Go compatível com SDK 57
em um dispositivo Android/iOS (ou um emulador configurado).

```sh
npm ci
npx expo start
```

Leia o QR code com o Expo Go, usando a mesma rede do computador.
Também é possível executar `npm run android` para um emulador Android ou
`npm run ios` para o simulador iOS (requer macOS e Xcode).

## Estrutura

```text
App.js                       # Providers e navegação
index.js                     # Entrada do Expo
src/
  screens/                   # Login, produtos e detalhes
  components/                # Área segura, card, preço e estados de requisição
  services/                  # Axios e consultas de produtos por categoria/ID
  store/                     # Store Redux Toolkit e authSlice
  navigation/                # Pilha protegida pela sessão e duas abas
tests/                       # Validação, sessão e contratos dos serviços
```

As dependências nativas da navegação são `react-native-screens` e
`react-native-safe-area-context`. O `react-redux` conecta a store ao React.
As versões reproduzíveis estão no `package-lock.json`.

## Verificações

```sh
npm test
npx expo install --check
npx expo-doctor
npx expo export --platform android --platform ios
git diff --check
```

A exportação verifica o bundle de ambas as plataformas. A execução visual
no dispositivo deve ser verificada separadamente com Expo Go.

Na preparação inicial, o Expo Doctor passou nas 21 verificações e os bundles
Android/iOS foram gerados com sucesso. O servidor iniciou com `npx expo start`.
Após adicionar as abas, o npm apontou 17 alertas moderados transitivos, originados em
`decode-uri-component` (React Navigation) e `uuid` (ferramentas do Expo).
A correção com `--force` sugere versões antigas incompatíveis e não foi aplicada.

## Fluxo para demonstração

1. Tente entrar com campos vazios para visualizar a validação.
2. Informe qualquer usuário e senha fictícios não vazios. Não há autenticação real.
   Apenas o nome do usuário fica no Redux; a senha não é armazenada nem enviada.
3. Consulte as abas Masculino e Feminino. Elas carregam todas as categorias abaixo.
4. Toque em um produto para buscar `/products/{id}` e visualizar nome, imagem,
   descrição, preço (exibido em US$, sem conversão) e desconto percentual da API.
5. Use **Sair** na lista ou nos detalhes. O Redux é limpo e o login volta a ser
   a única tela disponível. Reiniciar o aplicativo também encerra a sessão.

Masculino: `mens-shirts`, `mens-shoes`, `mens-watches`.

Feminino: `womens-bags`, `womens-dresses`, `womens-jewellery`, `womens-shoes`,
`womens-watches`.

As consultas exibem carregamento e, em caso de falha, mensagem e botão
**Tentar novamente**. Para demonstrar esse estado, desligue a conexão antes
de abrir uma aba ainda não carregada ou um detalhe e depois tente novamente.
O catálogo exige conexão com a DummyJSON. Não há cadastro nem alterações de produtos.

Trabalhar na branch `develop`, seguindo o `AGENTS.md`.

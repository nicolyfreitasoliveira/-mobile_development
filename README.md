# Mobile Development

Trabalho acadêmico em React Native com Expo SDK 57. Esta etapa contém apenas
a base do aplicativo, com uma tela inicial, navegação em pilha, Redux e cliente HTTP.

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
  screens/HomeScreen.js      # Tela inicial provisória
  components/Screen.js       # Contêiner com área segura
  services/api.js            # Instância Axios para a DummyJSON
  store/index.js             # Store Redux Toolkit, ainda sem slices
  navigation/AppNavigator.js # React Navigation com native stack
```

As dependências nativas da navegação são `react-native-screens` e
`react-native-safe-area-context`. O `react-redux` conecta a store ao React.
As versões reproduzíveis estão no `package-lock.json`.

## Verificações

```sh
npx expo install --check
npx expo-doctor
npx expo export --platform android --platform ios
git diff --check
```

A exportação verifica o bundle de ambas as plataformas. A execução visual
no dispositivo deve ser verificada separadamente com Expo Go.

Na preparação inicial, o Expo Doctor passou nas 21 verificações e os bundles
Android/iOS foram gerados com sucesso. O servidor iniciou com `npx expo start`.
O `npm audit` apontou 16 alertas moderados transitivos, originados em
`decode-uri-component` (React Navigation) e `uuid` (ferramentas do Expo).
A correção com `--force` sugere versões antigas incompatíveis e não foi aplicada.

## Próximas etapas

Login com validação, usuário temporário em memória, produtos da DummyJSON,
abas masculino/feminino, detalhes e logout serão implementados posteriormente.
Nesta base ainda não há chamadas à API nem funcionalidades de autenticação.

Trabalhar na branch `develop`, seguindo o `AGENTS.md`.

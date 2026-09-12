import { useState } from 'react';
import { Pressable, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Screen from '../components/Screen';
import { login, validateLogin } from '../store/authSlice';
import { colors, fonts } from '../components/theme';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleLogin() {
    const nextErrors = validateLogin(username, password);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    dispatch(login({ username }));
    setPassword('');
  }

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.description}>Explore. Escolha. Conquiste.</Text>
          <View style={styles.field}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput accessibilityLabel="Usuário" style={styles.input} value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} />
          {errors.username ? <Text accessibilityRole="alert" style={styles.error}>{errors.username}</Text> : null}
          </View>
          <Text style={styles.label}>Senha</Text>
          <TextInput accessibilityLabel="Senha" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" onSubmitEditing={handleLogin} returnKeyType="go" />
          {errors.password ? <Text accessibilityRole="alert" style={styles.error}>{errors.password}</Text> : null}
          <Pressable accessibilityRole="button" onPress={handleLogin} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: { paddingTop: 48, paddingBottom: 32 },
  title: { fontFamily: fonts.medium, fontSize: 24, lineHeight: 29, color: colors.black, marginBottom: 22 },
  description: { fontFamily: fonts.regular, color: colors.muted, fontSize: 16, lineHeight: 20, marginBottom: 43 },
  label: { fontFamily: fonts.regular, fontSize: 15, lineHeight: 18, color: colors.text },
  field: { marginBottom: 26 },
  input: { borderWidth: 1, borderColor: colors.black, borderRadius: 6, minHeight: 46, paddingHorizontal: 12, paddingVertical: 10, marginTop: 8, color: colors.text, fontFamily: fonts.regular, fontSize: 16 },
  error: { color: colors.error, fontFamily: fonts.regular, marginTop: 8 },
  button: { marginTop: 36, minHeight: 44, borderRadius: 8, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center', padding: 12 },
  buttonText: { color: colors.background, fontFamily: fonts.medium, fontSize: 16, lineHeight: 20 },
  pressed: { opacity: 0.75 },
});

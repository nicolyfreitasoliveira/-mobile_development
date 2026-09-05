import { useState } from 'react';
import { Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Screen from '../components/Screen';
import { login, validateLogin } from '../store/authSlice';

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
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.description}>Login de demonstração: preencha usuário e senha com valores fictícios.</Text>
          <Text>Usuário</Text>
          <TextInput accessibilityLabel="Usuário" style={styles.input} value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} />
          {errors.username ? <Text accessibilityRole="alert" style={styles.error}>{errors.username}</Text> : null}
          <Text>Senha</Text>
          <TextInput accessibilityLabel="Senha" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" onSubmitEditing={handleLogin} returnKeyType="go" />
          {errors.password ? <Text accessibilityRole="alert" style={styles.error}>{errors.password}</Text> : null}
          <Button title="Entrar" onPress={handleLogin} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
  description: { fontSize: 16, lineHeight: 24, marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#667085', borderRadius: 6, padding: 12, marginTop: 8, marginBottom: 12, color: '#182230' },
  error: { color: '#b42318', marginBottom: 12 },
});

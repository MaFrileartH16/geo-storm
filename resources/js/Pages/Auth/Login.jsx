import { AppLayout } from '@/Layouts/AppLayout.jsx';
import { router } from '@inertiajs/core';
import { useForm } from '@inertiajs/react';
import {
  Anchor,
  Box,
  Button,
  Center,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const Login = (props) => {
  // Inertia.js useForm hook untuk mengelola form
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  // Fungsi untuk mengirim data form
  const submit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'), // Reset password field setelah submit
    });
  };

  return (
    <AppLayout title="Masuk Akun" notification={props.notification}>
      <Center mih="100vh">
        <Box
          w={400}
          p="md"
          style={{ border: '1px solid #ddd', borderRadius: '8px' }}
        >
          <Title align="center" mb="md">
            Masuk Akun
          </Title>

          {/* Form Login */}
          <form onSubmit={submit}>
            {/* Input Email */}
            <TextInput
              label="Email"
              placeholder="Masukkan email Anda"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={errors.email} // Tampilkan pesan error jika ada
              required
              mb="md"
            />

            {/* Input Password */}
            <PasswordInput
              label="Password"
              placeholder="Masukkan password Anda"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              error={errors.password} // Tampilkan pesan error jika ada
              required
              mb="md"
            />

            {/* Tombol Submit */}
            <Button type="submit" fullWidth loading={processing}>
              Masuk
            </Button>

            <Text align="center" mt="md">
              Belum punya akun?{' '}
              <Anchor
                onClick={() => router.get(route('register'))}
                style={{ color: '#228be6', textDecoration: 'none' }}
              >
                Daftar di sini
              </Anchor>
            </Text>
          </form>
        </Box>
      </Center>
    </AppLayout>
  );
};

export default Login;

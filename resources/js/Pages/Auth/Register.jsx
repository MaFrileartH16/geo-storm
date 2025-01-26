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

const Register = (props) => {
  // Inertia.js useForm hook untuk mengelola form
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // Fungsi untuk mengirim data form
  const submit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'), // Reset password field setelah submit
    });
  };

  return (
    <AppLayout title="Daftar Akun" notification={props.notification}>
      <Center mih="100vh">
        <Box
          w={400}
          p="md"
          style={{ border: '1px solid #ddd', borderRadius: '8px' }}
        >
          <Title align="center" mb="md">
            Daftar Akun
          </Title>

          {/* Form Register */}
          <form onSubmit={submit}>
            {/* Input Nama */}
            <TextInput
              label="Nama"
              placeholder="Masukkan nama Anda"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              error={errors.name} // Tampilkan pesan error jika ada
              required
              mb="md"
            />

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

            {/* Input Konfirmasi Password */}
            <PasswordInput
              label="Konfirmasi Password"
              placeholder="Masukkan ulang password Anda"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              error={errors.password_confirmation} // Tampilkan pesan error jika ada
              required
              mb="md"
            />

            {/* Tombol Submit */}
            <Button type="submit" fullWidth loading={processing}>
              Daftar
            </Button>

            {/* Tautan ke Halaman Login */}
            <Text align="center" mt="md">
              Sudah punya akun?{' '}
              <Anchor
                onClick={() => router.get(route('login'))}
                style={{ color: '#228be6', textDecoration: 'none' }}
              >
                Masuk di sini
              </Anchor>
            </Text>
          </form>
        </Box>
      </Center>
    </AppLayout>
  );
};

export default Register;

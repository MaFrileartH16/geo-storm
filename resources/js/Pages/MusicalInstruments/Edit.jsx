import { AppLayout } from '@/Layouts/AppLayout.jsx';
import { Link, router, useForm } from '@inertiajs/react'; // Import useForm dari Inertia
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Flex,
  Group,
  Menu,
  NavLink,
  Select,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconMenu } from '@tabler/icons-react';

const Edit = (props) => {
  console.log(props);
  // Inisialisasi form dengan useForm dari Inertia
  const { data, setData, put, processing, errors } = useForm({
    name: props.musicalInstrument.name,
    status: props.musicalInstrument.status,
  });

  // Fungsi untuk handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('musical-instruments.update', musicalInstrument.id)); // Kirim data ke endpoint update
  };

  const [opened, { open, close }] = useDisclosure(false);

  // Fungsi untuk handle logout
  const handleLogout = () => {
    router.post(route('logout')); // Arahkan ke route logout
  };

  return (
    <AppLayout title="Edit Alat Musik">
      <Flex mih="100vh" direction="column">
        {/* Tombol untuk membuka Drawer */}
        <Group justify="space-between" p={16}>
          {/* Menu Avatar dengan Logout */}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Avatar
                radius="sm"
                size={48}
                style={{ cursor: 'pointer' }}
                src="https://placekitten.com/100/100" // Ganti dengan URL avatar Anda
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                color="red"
                leftSection={<IconLogout size={14} />}
                onClick={handleLogout} // Panggil fungsi logout saat diklik
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <ActionIcon onClick={open} size={48}>
            <IconMenu />
          </ActionIcon>
        </Group>

        <Divider />

        {/* Drawer Navigation */}
        <Drawer
          opened={opened}
          onClose={close}
          title="Menu Navigasi"
          styles={{
            header: {
              backgroundColor: '#f8f9fa',
              borderBottom: '1px solid #ddd',
            },
            content: { backgroundColor: '#f8f9fa' },
          }}
        >
          {/* Menu Dasbor */}
          <NavLink
            label="Dasbor"
            component={Link}
            href={route('dashboard')}
            onClick={close}
            styles={{
              root: { borderRadius: '8px', marginBottom: '4px' },
              label: { fontSize: '16px' },
            }}
          />

          {props.auth.user.role === 'Admin' && (
            <NavLink
              label="Pengguna"
              component={Link}
              href={route('users.index')}
              onClick={close}
              styles={{
                root: { borderRadius: '8px', marginBottom: '4px' },
                label: { fontSize: '16px' },
              }}
            />
          )}

          {/* Menu Alat Musik */}
          <NavLink
            label="Alat Musik"
            component={Link}
            href={route('musical-instruments.index')}
            onClick={close}
            styles={{
              root: { borderRadius: '8px', marginBottom: '4px' },
              label: { fontSize: '16px' },
            }}
          />

          {/* Menu Rental */}
          <NavLink
            label="Rental"
            component={Link}
            href={route('rentals.index')}
            onClick={close}
            styles={{
              root: { borderRadius: '8px', marginBottom: '4px' },
              label: { fontSize: '16px' },
            }}
          />
        </Drawer>

        <Box p={16}>
          <Title order={2} mb={16}>
            Edit Alat Musik
          </Title>
          <form onSubmit={handleSubmit}>
            {/* Input Nama Alat Musik */}
            <TextInput
              label="Nama Alat Musik"
              placeholder="Masukkan nama alat musik"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              error={errors.name} // Tampilkan pesan error jika ada
              mb={16}
            />

            {/* Input Status */}
            <Select
              label="Status"
              placeholder="Pilih status alat musik"
              defaultValue={data.status}
              onChange={(value) => setData('status', value)}
              data={[
                { value: 'available', label: 'Available' },
                { value: 'unavailable', label: 'Unavailable' },
              ]}
              error={errors.status} // Tampilkan pesan error jika ada
              mb={16}
            />

            {/* Tombol Submit dan Batal */}
            <Group>
              <Button type="submit" color="blue" loading={processing}>
                Simpan Perubahan
              </Button>
              <Button
                component={Link}
                href={route('musical-instruments.index')}
                variant="outline"
                color="gray"
              >
                Batal
              </Button>
            </Group>
          </form>
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Edit;

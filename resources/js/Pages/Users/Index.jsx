import { AppLayout } from '@/Layouts/AppLayout.jsx';
import { Link, router } from '@inertiajs/react'; // Import router dari Inertia
import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Drawer,
  Flex,
  Group,
  Menu,
  NavLink,
  Table,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconMenu, IconTrash } from '@tabler/icons-react'; // Import ikon yang diperlukan

const Index = (props) => {
  const UsersTable = ({ users }) => {
    // Fungsi untuk handle hapus pengguna
    const handleDeleteUser = (userId) => {
      if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
        router.delete(route('users.destroy', userId)); // Arahkan ke route hapus pengguna
      }
    };

    // Jika users tidak ada atau kosong, tampilkan pesan
    if (!users || users.length === 0) {
      return <div>Tidak ada data pengguna.</div>;
    }

    // Map data users ke dalam baris tabel
    const rows = users.map((user) => (
      <Table.Tr key={user.id}>
        <Table.Td>{user.name}</Table.Td>
        <Table.Td>{user.email}</Table.Td>
        <Table.Td>
          <ActionIcon
            color="red"
            variant="light"
            onClick={() => handleDeleteUser(user.id)} // Panggil fungsi hapus saat diklik
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    ));

    return (
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nama</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Aksi</Table.Th> {/* Kolom untuk tombol hapus */}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  };

  // Hook untuk mengontrol Drawer
  const [opened, { open, close }] = useDisclosure(false);

  // Fungsi untuk handle logout
  const handleLogout = () => {
    router.post(route('logout')); // Arahkan ke route logout
  };

  return (
    <AppLayout title="Daftar Pengguna">
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

        {/* Konten utama */}
        <Box p={16}>
          <Title order={2} mb={16}>
            Daftar Pengguna
          </Title>
          <UsersTable users={props.users} />
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Index;

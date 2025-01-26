import { AppLayout } from '@/Layouts/AppLayout.jsx';
import { Link, router } from '@inertiajs/react'; // Import router dari Inertia
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
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
import { IconEdit, IconLogout, IconMenu, IconTrash } from '@tabler/icons-react'; // Import ikon yang diperlukan

const Index = (props) => {
  const MusicalInstrumentsTable = ({ musicalInstruments }) => {
    // Fungsi untuk handle hapus alat musik
    const handleDeleteInstrument = (instrumentId) => {
      if (confirm('Apakah Anda yakin ingin menghapus alat musik ini?')) {
        router.delete(route('musical-instruments.destroy', instrumentId));
      }
    };

    // Jika tidak ada data alat musik, tampilkan pesan
    if (!musicalInstruments || musicalInstruments.length === 0) {
      return <div>Tidak ada data alat musik.</div>;
    }

    // Map data alat musik ke dalam baris tabel
    const rows = musicalInstruments.map((instrument) => (
      <Table.Tr key={instrument.id}>
        <Table.Td>{instrument.name}</Table.Td>
        <Table.Td>
          <Badge color={!instrument.is_rented ? 'green' : 'red'}>
            {!instrument.is_rented ? 'Tersedia' : 'Disewa'}
          </Badge>
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            {/* Tombol Edit (Hanya untuk Admin) */}
            {props.auth.user.role === 'Admin' && (
              <ActionIcon
                variant="light"
                color="blue"
                onClick={() =>
                  router.visit(route('musical-instruments.edit', instrument.id))
                }
              >
                <IconEdit size={16} />
              </ActionIcon>
            )}

            {/* Tombol Hapus (Hanya untuk Admin) */}
            {props.auth.user.role === 'Admin' && (
              <ActionIcon
                variant="light"
                color="red"
                onClick={() => handleDeleteInstrument(instrument.id)}
              >
                <IconTrash size={16} />
              </ActionIcon>
            )}

            {/* Tombol Sewa (Hanya untuk Borrower) */}
            {props.auth.user.role === 'Borrower' && (
              <Button
                disabled={instrument.is_rented}
                variant="light"
                color="green"
                onClick={() => {
                  router.post(route('rentals.store'), {
                    user_id: props.auth.user.id, // ID pengguna yang sedang login
                    musical_instrument_id: instrument.id, // ID alat musik yang disewa
                    is_rented: true, // Status penyewaan
                  });
                }}
              >
                Sewa
              </Button>
            )}
          </Group>
        </Table.Td>
      </Table.Tr>
    ));

    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nama</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Aksi</Table.Th>
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
    <AppLayout title="Daftar Alat Musik">
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
          <Group justify="space-between" mb={16}>
            <Title order={2}>Daftar Alat Musik</Title>

            {props.auth.user.role === 'Admin' && (
              <Button
                component={Link}
                href={route('musical-instruments.create')}
                variant="filled"
                color="blue"
              >
                Tambah Alat Musik
              </Button>
            )}
          </Group>
          <MusicalInstrumentsTable
            musicalInstruments={props.musicalInstruments}
          />
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Index;

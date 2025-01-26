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
import {
  IconCheck,
  IconLogout,
  IconMenu,
  IconTrash,
} from '@tabler/icons-react'; // Import ikon yang diperlukan

const Index = (props) => {
  const RentalsTable = ({ rentals }) => {
    // Fungsi untuk handle hapus rental
    const handleDeleteRental = (rentalId) => {
      if (confirm('Apakah Anda yakin ingin menghapus rental ini?')) {
        router.delete(route('rentals.destroy', rentalId)); // Arahkan ke route hapus rental
      }
    };

    // Fungsi untuk handle kembalikan rental
    const handleReturnRental = (rentalId) => {
      if (confirm('Apakah Anda yakin ingin mengembalikan rental ini?')) {
        router.post(route('rentals.return', rentalId)); // Arahkan ke route kembalikan rental
      }
    };

    // Jika rentals tidak ada atau kosong, tampilkan pesan
    if (!rentals || rentals.length === 0) {
      return <div>Tidak ada data rental.</div>;
    }

    // Map data rentals ke dalam baris tabel
    const rows = rentals.map((rental) => (
      <Table.Tr key={rental.id}>
        <Table.Td>{rental.user.name}</Table.Td>
        <Table.Td>{rental.musical_instrument.name}</Table.Td>
        <Table.Td>
          {/* Tombol Kembalikan */}
          {rental.is_rented && (
            <ActionIcon
              color="green"
              variant="light"
              onClick={() => handleReturnRental(rental.id)} // Panggil fungsi kembalikan saat diklik
              style={{ marginRight: '8px' }}
            >
              <IconCheck size={16} /> {/* Ganti dengan ikon yang sesuai */}
            </ActionIcon>
          )}
          {/* Tombol Hapus */}
          <ActionIcon
            color="red"
            variant="light"
            onClick={() => handleDeleteRental(rental.id)} // Panggil fungsi hapus saat diklik
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
            <Table.Th>Nama Pengguna</Table.Th>
            <Table.Th>Alat Musik</Table.Th>
            <Table.Th>Aksi</Table.Th> {/* Kolom untuk tombol aksi */}
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
    <AppLayout title="Daftar Rental">
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
            Daftar Rental
          </Title>
          <RentalsTable rentals={props.rentals} />
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Index;

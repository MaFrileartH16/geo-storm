import { AppLayout } from '@/Layouts/AppLayout.jsx';
import { Link, router } from '@inertiajs/react'; // Import router dari Inertia
import { BarChart } from '@mantine/charts';
import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Divider,
  Drawer,
  Flex,
  Group,
  Menu,
  NavLink,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconMenu } from '@tabler/icons-react'; // Import ikon yang diperlukan

const Dashboard = (props) => {
  console.log(props);
  // Hook untuk mengontrol Drawer
  const [opened, { open, close }] = useDisclosure(false);

  // Fungsi untuk handle logout
  const handleLogout = () => {
    router.post(route('logout')); // Arahkan ke route logout
  };

  return (
    <AppLayout title="Dasbor">
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
          {props.auth.user.role === 'Admin' && (
            <Card shadow="sm" padding="lg" radius="md" mb={16}>
              <Title order={3} mb={16}>
                Jumlah Users per Bulan
              </Title>
              <BarChart
                h={300}
                data={props.userData}
                dataKey="month"
                series={[{ name: 'Pengguna', color: 'violet.6' }]}
                tickLine="xy"
                gridAxis="xy"
              />
            </Card>
          )}

          {props.auth.user.role === 'Borrower' && (
            <Card shadow="sm" padding="lg" radius="md" mb={16}>
              <Title order={3} mb={16}>
                Jumlah Meminjam per Bulan
              </Title>
              <BarChart
                h={300}
                data={props.rentalData}
                dataKey="month"
                series={[{ name: 'Meminjam', color: 'blue.6' }]}
                tickLine="xy"
                gridAxis="xy"
              />
            </Card>
          )}
        </Box>
      </Flex>
    </AppLayout>
  );
};

export default Dashboard;

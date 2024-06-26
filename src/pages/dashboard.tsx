import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import useMagic from '../utils/useMagic';
import Header from '../components/Header';
import NFTCarousel from '../components/NFTCarousel';
import NFTCarousel1 from '../components/NFTCarousel1';
import EventCards from '../components/EventCards';
import Footer from '../components/Footer';
import BilleteraCard from '../components/BilleteraCard';
import TestSupabaseConnection from '../components/TestSupabaseConnection';

const Dashboard = () => {
  const { user, logout, loading, network, magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  const router = useRouter();

  const [showWalletInfo, setShowWalletInfo] = useState(false);
  const [showSanacion, setShowSanacion] = useState(false);
  const [showCertificados, setShowCertificados] = useState(false);
  const [events, setEvents] = useState([
    {
      title: 'Evento 1',
      start: new Date(),
      end: new Date(),
      description: 'Descripción del Evento 1',
    },
    {
      title: 'Evento 2',
      start: new Date(),
      end: new Date(),
      description: 'Descripción del Evento 2',
    },
  ]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  const handleIconClick = async (action: string) => {
    if (!magic) return;

    switch (action) {
      case 'ShowUIComponent':
        await magic.wallet.showUI();
        break;
      case 'ShowSendTokensUIComponent':
        await magic.wallet.showSendTokensUI();
        break;
      case 'ShowBalancesComponent':
        await magic.wallet.showBalances();
        break;
      case 'ShowNFTsComponent':
        await magic.wallet.showNFTs();
        break;
      case 'ShowOnRampComponent':
        await magic.wallet.showOnRamp();
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (!user) {
    return null;
  }

  return (
    <Flex direction="column" minHeight="100vh">
      <Box flex="1">
        <Header />
        <Box p={4} mt={8} display="flex" justifyContent="center">
          <Box w="full" maxW="1200px" mx="auto" px={{ base: 2, md: 4 }}>
            <Heading as="h1" size="lg" mb={4} textAlign="center">
              Bienvenido a MY LEAP
            </Heading>
            <Text textAlign="center" mb={8}>
              Aquí puedes gestionar tu sanación y ver el estado de tu energía.
            </Text>
            <Flex justify="center">
              <BilleteraCard 
                handleIconClick={handleIconClick}
                showWalletInfo={showWalletInfo}
                setShowWalletInfo={setShowWalletInfo}
                showSanacion={showSanacion}
                setShowSanacion={setShowSanacion}
                showCertificados={showCertificados}
                setShowCertificados={setShowCertificados}
              />
            </Flex>
            <Box mt={16}>
              <Heading as="h2" size="lg" fontWeight="extrabold" mb={2} textAlign="left">
                Cursos y certificados
              </Heading>
              <Text fontSize="lg" mb={4} textAlign="left">Explora los cursos y certificaciones disponibles.</Text>
              <NFTCarousel user={user} />
            </Box>
            <Box mt={16}>
              <Heading as="h2" size="lg" fontWeight="extrabold" mb={2} textAlign="left">
                Desafíos y beneficios
              </Heading>
              <Text fontSize="lg" mb={4} textAlign="left">Participa en desafíos y aprovecha los beneficios.</Text>
              <NFTCarousel1 user={user} />
            </Box>
            <Box mt={8} p={4} mb={32} boxShadow="md" borderRadius="lg">
              <Heading as="h2" size="lg" fontWeight="extrabold" mb={4} textAlign="center">
                Eventos y noticias
              </Heading>
              <EventCards events={events} />
            </Box>
          </Box>
        </Box>
      </Box>
      <TestSupabaseConnection />
      <Footer />
    </Flex>
  );
};

export default Dashboard;

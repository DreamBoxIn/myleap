// src/pages/index.tsx
import { useEffect, useState } from 'react';
import { Box, Button, VStack, Text, Image, HStack, Spacer, IconButton, useColorMode, useColorModeValue, Center, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useMagic from '../utils/useMagic';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("black", "white");
  const logomyleapSrc = useColorModeValue("/logomyleap.png", "/logo-white.png");

  const { user, login, logout, loading } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  const [email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email);
      console.log('Usuario autenticado');
      router.push('/dashboard'); // Redirigir al dashboard después de la autenticación
    } catch (error) {
      console.error('Error en la autenticación', error);
    }
  };

  return (
    <MotionBox
      textAlign="center"
      py={10}
      px={6}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HStack w="full" px={6} py={4}>
        <Image
          src={logomyleapSrc}
          alt="My Leap Logo"
          boxSize={{ base: "50px", md: "75px", lg: "100px" }} // Ajustamos el tamaño del logo
        />
        <Spacer />
        <IconButton
          aria-label="Toggle theme"
          icon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} color={iconColor} />}
          onClick={toggleColorMode}
          colorScheme="blue"
          variant="ghost"
          mr={4}
        />
        {!user ? (
          <Button colorScheme="blue" onClick={onOpen}>Conectar</Button>
        ) : (
          <Button colorScheme="red" onClick={() => { logout(); router.push('/'); }}>Cerrar sesión</Button>
        )}
      </HStack>
      <Center>
        <Image
          py={10} // Ajuste para subir la imagen
          src="/betterme.png"
          alt="My Leap"
          borderRadius="full"
          mb={4}
          mt={-10} // Ajuste para subir la imagen
          boxSize={{ base: "150px", md: "300px", lg: "400px" }}
        />
      </Center>
      <Text fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} fontWeight="bold" mb={2}>
        Bienvenido a My Leap
      </Text>
      <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={4}>
        Plataforma innovadora para equilibrar tu bienestar y explorar nuevas oportunidades
      </Text>
      <VStack spacing={4}>
        <MotionButton whileHover={{ scale: 1.1 }} colorScheme="teal" onClick={onOpen}>Grupo de WhatsApp</MotionButton>
        <MotionButton whileHover={{ scale: 1.1 }} colorScheme="purple" mb={6} onClick={onOpen}>Comenzar</MotionButton>
        <HStack spacing={4}>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar Sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!user ? (
              <VStack spacing={4}>
                <Image
                  src={logomyleapSrc}
                  alt="My Leap Logo"
                  boxSize="50px"
                  mb={4}
                />
                <Input
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md"
                  width="100%"
                />
              </VStack>
            ) : (
              <Text>Ya tienes una sesión iniciada.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            {!user ? (
              <Button colorScheme="blue" mr={3} onClick={handleLogin}>
                Iniciar sesión
              </Button>
            ) : null}
            <Button variant="ghost" onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default Home;

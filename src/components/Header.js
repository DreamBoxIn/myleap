// src/components/Header.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import useMagic from '../utils/useMagic';
import ShowAddressComponent from './ShowAddressComponent';
import UserLevelTag from './UserLevelTag';

const Header = () => {
  const { user, logout, loading, network, tokens } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("black", "white");
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(user.publicAddress);
      alert("Dirección copiada al portapapeles");
    } catch (err) {
      console.error("Error al copiar la dirección: ", err);
    }
  };

  return (
    <Box bgGradient="linear(to-r, purple.500, blue.500)" px={4} py={2} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={4}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" color="white">MY LEAP</Text>
            <Text fontSize="sm" fontWeight="medium" color="white">es potenciado por Método ONE</Text>
          </Box>
        </HStack>
        <HStack spacing={4}>
          <IconButton
            aria-label="Toggle theme"
            icon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} color={iconColor} />}
            onClick={toggleColorMode}
            colorScheme="blue"
            variant="ghost"
          />
          {user && <UserLevelTag tokenAmount={tokens} />} {/* Tag visible entre el botón de perfil y el icono de cambiar el tema */}
          {user && (
            <Menu>
              <MenuButton as={Button} rounded="full" variant="link" cursor="pointer">
                <Avatar size="sm" name={user?.email} />
              </MenuButton>
              <MenuList>
                <Box px={4} py={2}>
                  <Flex alignItems="center" justifyContent="space-between" mb={2}>
                    <Text fontWeight="bold">{user.email}</Text>
                    <UserLevelTag tokenAmount={tokens} /> {/* Mover el tag al lado derecho del correo */}
                  </Flex>
                  <HStack mb={2}>
                    <Text>{user.publicAddress}</Text>
                    <Tooltip label="Copiar dirección">
                      <IconButton
                        aria-label="Copiar dirección"
                        icon={<FontAwesomeIcon icon={faCopy} />}
                        onClick={handleCopy}
                        size="sm"
                        variant="ghost"
                      />
                    </Tooltip>
                  </HStack>
                  <Text mb={2}>{network}</Text>
                </Box>
                <MenuDivider />
                <VStack px={4} py={2} spacing={4} align="start">
                  <ShowAddressComponent />
                </VStack>
                <MenuDivider />
                <MenuItem>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;

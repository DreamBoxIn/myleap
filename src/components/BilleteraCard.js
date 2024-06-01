import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  HStack,
  VStack,
  IconButton,
  Text,
  Center,
  Collapse,
  Button,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faPaperPlane,
  faMoneyCheck,
  faChevronDown,
  faChevronUp,
  faInfoCircle,
  faHeart,
  faImages,
} from '@fortawesome/free-solid-svg-icons';
import useMagic from '../utils/useMagic';
import UserLevelTag from './UserLevelTag';

const BilleteraCard = ({ handleIconClick, showWalletInfo, setShowWalletInfo }) => {
  const { magic, tokens } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleToggle = () => setShowWalletInfo(!showWalletInfo);

  return (
    <Card boxShadow="md" borderRadius="lg" maxWidth="400px" width="100%" onClick={() => showWalletInfo && setShowWalletInfo(false)}>
      <CardHeader bgGradient="linear(to-r, purple.500, blue.500)" color="white" borderTopRadius="lg">
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={6}>
            <VStack>
              <IconButton
                icon={<FontAwesomeIcon icon={faThLarge} size="2x" />}
                aria-label="Mostrar UI Completa"
                onClick={() => handleIconClick('ShowUIComponent')}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              />
              <Text fontSize="md" fontWeight="bold" onClick={() => handleIconClick('ShowUIComponent')} cursor="pointer">Billetera</Text>
            </VStack>
            <VStack>
              <IconButton
                icon={<FontAwesomeIcon icon={faPaperPlane} size="2x" />}
                aria-label="Enviar Tokens"
                onClick={() => handleIconClick('ShowSendTokensUIComponent')}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              />
              <Text fontSize="md" fontWeight="bold" onClick={() => handleIconClick('ShowSendTokensUIComponent')} cursor="pointer">Enviar</Text>
            </VStack>
            <VStack>
              <IconButton
                icon={<FontAwesomeIcon icon={faMoneyCheck} size="2x" />}
                aria-label="Mostrar OnRamp"
                onClick={() => handleIconClick('ShowOnRampComponent')}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              />
              <Text fontSize="md" fontWeight="bold" onClick={() => handleIconClick('ShowOnRampComponent')} cursor="pointer">Comprar</Text>
            </VStack>
            <VStack>
              <IconButton
                icon={<FontAwesomeIcon icon={faHeart} size="2x" />}
                aria-label="Tokens LEAP"
                onClick={(e) => { e.stopPropagation(); handleIconClick('ShowBalancesComponent'); }}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              />
              <Text fontSize="md" fontWeight="bold" onClick={(e) => { e.stopPropagation(); handleIconClick('ShowBalancesComponent'); }} cursor="pointer">LEAP</Text>
            </VStack>
            <VStack>
              <IconButton
                icon={<FontAwesomeIcon icon={faImages} size="2x" />}
                aria-label="Mostrar NFTs"
                onClick={(e) => { e.stopPropagation(); handleIconClick('ShowNFTsComponent'); }}
                variant="ghost"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              />
              <Text fontSize="md" fontWeight="bold" onClick={(e) => { e.stopPropagation(); handleIconClick('ShowNFTsComponent'); }} cursor="pointer">NFTs</Text>
            </VStack>
          </HStack>
        </Flex>
      </CardHeader>
      <CardBody maxWidth="350px" mx="auto" mt={-2} mb={-2} onClick={(e) => e.stopPropagation()}>
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Box>
            <Button onClick={handleToggle} rightIcon={showWalletInfo ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} variant="ghost" opacity="0.6" size="sm">
              {showWalletInfo ? 'Ver menos' : 'Más información'}
            </Button>
          </Box>
          <Box ml="auto">
            <UserLevelTag tokenAmount={tokens} />
          </Box>
        </Flex>
        <Collapse in={showWalletInfo}>
          <Box mt={4} width="100%" mx="auto">
            <HStack mb={4} alignItems="start">
              <FontAwesomeIcon icon={faThLarge} size="lg" />
              <Text fontSize="sm">Accede a la UI completa de tu billetera para ver y gestionar todos tus activos.</Text>
            </HStack>
            <HStack mb={4} alignItems="start">
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              <Text fontSize="sm">Envía tokens a otras direcciones de manera rápida y sencilla.</Text>
            </HStack>
            <HStack mb={4} alignItems="start">
              <FontAwesomeIcon icon={faMoneyCheck} size="lg" />
              <Text fontSize="sm">Compra tokens usando diferentes métodos de pago.</Text>
            </HStack>
            <HStack mb={4} alignItems="start">
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <Text fontSize="sm">Consulta tus Tokens LEAP y su balance actual.</Text>
            </HStack>
            <HStack mb={4} alignItems="start">
              <FontAwesomeIcon icon={faImages} size="lg" />
              <Text fontSize="sm">Revisa tus NFTs y sus detalles.</Text>
            </HStack>
            <HStack alignItems="start">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
              <Text fontSize="sm">Para más información contacto@myleap.com</Text>
            </HStack>
          </Box>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default BilleteraCard;

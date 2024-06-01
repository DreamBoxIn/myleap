import React from 'react';
import { Box, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      bg="rgba(0, 0, 0, 0.5)"
      color="white"
      py={4}
      textAlign="center"
      position="absolute"
      bottom="0"
    >
      <Text mb={2}>© 2024 My Leap. Todos los derechos reservados.</Text>
      <Text mb={4}>Innovando en Web3, blockchain y finanzas digitales.</Text>
      <HStack spacing={4} justify="center">
        <Link href="https://twitter.com/my_leap" isExternal>
          <Icon as={FontAwesomeIcon} icon={faTwitter} w={6} h={6} />
        </Link>
        <Link href="https://facebook.com/my_leap" isExternal>
          <Icon as={FontAwesomeIcon} icon={faFacebook} w={6} h={6} />
        </Link>
        <Link href="https://instagram.com/my_leap" isExternal>
          <Icon as={FontAwesomeIcon} icon={faInstagram} w={6} h={6} />
        </Link>
        <Link href="https://linkedin.com/company/my_leap" isExternal>
          <Icon as={FontAwesomeIcon} icon={faLinkedin} w={6} h={6} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;

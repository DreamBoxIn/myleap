import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Image, Text, Button, useColorModeValue, VStack, Badge, Collapse, HStack, useDisclosure } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChallengeBenefitModal from './ChallengeBenefitModal'; // Asegúrate de que ChallengeBenefitModal esté correctamente importado

const NFTCarousel1 = ({ user }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nftItems = [
    { id: 1, title: 'Desafío ONE', author: 'Por Enrico Oddone', tokens: '200 LEAP', image: '/portadas/metodoone1.png', type: 'Desafío', availability: '2 de 10', description: 'Descripción detallada del desafío. Aquí se puede añadir cualquier información adicional sobre el desafío, sus características, beneficios, etc.', smartContract: 'https://example.com/smart-contract-1' },
    { id: 2, title: 'Desafío ONE to ONE', author: 'Por Comunidad', tokens: '50 LEAP', image: '/portadas/metodoone1.png', type: 'Taller', availability: '5 de 20', description: 'Descripción detallada del desafío. Aquí se puede añadir cualquier información adicional sobre el desafío, sus características, beneficios, etc.', smartContract: 'https://example.com/smart-contract-2' },
    { id: 3, title: 'Desafío GrupONE', author: 'Por Comunidad', tokens: '25 LEAP', image: '/portadas/metodoone1.png', type: 'Desafío', availability: '10 de 15', description: 'Descripción detallada del desafío. Aquí se puede añadir cualquier información adicional sobre el desafío, sus características, beneficios, etc.', smartContract: 'https://example.com/smart-contract-3' },
    // Agrega más elementos según sea necesario
  ];

  const cardBgColor = useColorModeValue('gray.100', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNFT, setSelectedNFT] = useState(null);

  const openModal = (nftItem) => {
    setSelectedNFT(nftItem);
    onOpen();
  };

  return (
    <Box mt={8} p={4} boxShadow="md" borderRadius="lg">
      <Slider {...settings}>
        {nftItems.map(item => (
          <NFTCard key={item.id} item={item} cardBgColor={cardBgColor} openModal={openModal} />
        ))}
      </Slider>
      {selectedNFT && (
        <ChallengeBenefitModal isOpen={isOpen} onClose={onClose} nftItem={selectedNFT} user={user} />
      )}
    </Box>
  );
};

const NFTCard = ({ item, cardBgColor, openModal }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Box
      p={4}
      m={{ base: 1, md: 2 }} // Ajuste de márgenes responsivos
      bg={cardBgColor}
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      width={{ base: '100%', md: '350px' }} // Ajuste de ancho responsivo
      minHeight="350px"
      position="relative"
    >
      <Box position="relative" width="100%" height="150px" mb={4}>
        <Image 
          src={item.image} 
          alt={item.title} 
          borderRadius="md" 
          width="100%" 
          height="100%" 
          objectFit="cover" 
        />
        <Badge position="absolute" top={2} left={2} colorScheme="teal" fontSize="lg">{item.tokens}</Badge>
        <Box position="absolute" top={2} right={2} textAlign="right">
          <Badge colorScheme="blue">{item.type}</Badge>
        </Box>
        <Badge position="absolute" bottom={2} right={2} colorScheme="orange">{item.availability}</Badge>
      </Box>
      <VStack spacing={2} align="flex-start" flex="1">
        <Text fontWeight="bold">{item.title}</Text>
        <Text>{item.author}</Text>
        <Box mt={2} width="100%">
          <Collapse in={showFullDescription} startingHeight={72}>
            <Text mt={2}>{item.description}</Text>
          </Collapse>
          <Button onClick={() => setShowFullDescription(!showFullDescription)} rightIcon={showFullDescription ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} variant="link">
            {showFullDescription ? 'Ver menos' : 'Ver más'}
          </Button>
        </Box>
      </VStack>
      <HStack mt={4} alignSelf="flex-end">
        <Text fontWeight="bold" fontSize="md">{item.tokens}</Text>
        <Button colorScheme="blue" onClick={() => openModal(item)}>
          Iniciar
        </Button>
      </HStack>
    </Box>
  );
};

export default NFTCarousel1;

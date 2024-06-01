import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
  VStack,
  Badge,
  Box,
  Link,
  Collapse,
  Input,
  useToast,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { uploadImage } from '../utils/uploadImage';

const ChallengeBenefitModal = ({ isOpen, onClose, nftItem, user }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsUploading(true);
    try {
      const downloadURL = await uploadImage(file, user);
      setIsUploading(false);
      toast({
        title: "File uploaded",
        description: `Your file has been uploaded successfully. URL: ${downloadURL}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{nftItem.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box position="relative">
            <Image src={nftItem.image} alt={nftItem.title} borderRadius="md" mb={4} />
            <Badge position="absolute" top={2} left={2} colorScheme="teal" fontSize="lg">{nftItem.tokens}</Badge>
            <Box position="absolute" top={2} right={2} textAlign="right">
              <Badge colorScheme="blue">{nftItem.type}</Badge>
              <Badge ml={2} colorScheme="orange">{nftItem.availability}</Badge>
            </Box>
            <Box
              position="absolute"
              bottom={0}
              left={0}
              width="100%"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              p={2}
              borderBottomRadius="md"
              textAlign="left"
            >
              <Text fontSize="sm">{nftItem.title}</Text>
              <Text fontSize="xs">{nftItem.author}</Text>
            </Box>
          </Box>
          <VStack spacing={4} align="flex-start" mt={4}>
            <Collapse startingHeight={72} in={showFullDescription}>
              <Text>
                {nftItem.description}
              </Text>
            </Collapse>
            <Button size="sm" onClick={() => setShowFullDescription(!showFullDescription)} rightIcon={showFullDescription ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} variant="link">
              {showFullDescription ? 'Ver menos' : 'Ver más'}
            </Button>
            <Link href={nftItem.smartContract} color="blue.500" isExternal>Ver Smart Contract</Link>
            <Input type="file" onChange={handleFileChange} />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUpload} isLoading={isUploading}>
            Subir Imagen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChallengeBenefitModal;

import {
  Card,
  CardHeader,
  CardBody,
  Flex,
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
  faImages,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const CertificadosCard = ({ handleIconClick, showCertificados, setShowCertificados }) => {
  return (
    <Card boxShadow="md" borderRadius="lg">
      <CardHeader bg="purple.500" color="white" borderTopRadius="lg">
        <Flex justifyContent="center" alignItems="center">
          <VStack>
            <IconButton
              icon={<FontAwesomeIcon icon={faImages} size="2x" />}
              aria-label="Mostrar NFTs"
              onClick={(e) => { e.stopPropagation(); handleIconClick('ShowNFTsComponent'); }}
            />
            <Text fontSize="lg" fontWeight="bold" onClick={(e) => { e.stopPropagation(); handleIconClick('ShowNFTsComponent'); }} cursor="pointer">NFTs</Text>
          </VStack>
        </Flex>
      </CardHeader>
      <CardBody>
        <Center>
          <Button onClick={(e) => { e.stopPropagation(); setShowCertificados(!showCertificados); }} rightIcon={showCertificados ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} variant="ghost" size="sm">
            {showCertificados ? 'Ver menos' : 'Ver más'}
          </Button>
        </Center>
        <Collapse in={showCertificados}>
          <Box mt={2} maxW="90%">
            <Text fontSize="sm" fontWeight="bold">Niveles de Certificación</Text>
            <Box mt={1}>
              <Text fontSize="xs" fontWeight="semibold">Método ONE Nivel 1</Text>
              <Flex justifyContent="space-between">
                <Text fontSize="xs">Estado:</Text>
                <Text fontSize="xs" color="green.500">Aprobado</Text> {/* o "Iniciar" según corresponda */}
              </Flex>
            </Box>
            <Box mt={1}>
              <Text fontSize="xs" fontWeight="semibold">Método ONE Nivel 2</Text>
              <Flex justifyContent="space-between">
                <Text fontSize="xs">Estado:</Text>
                <Text fontSize="xs" color="yellow.500">Iniciar</Text> {/* o "Aprobado" según corresponda */}
              </Flex>
            </Box>
          </Box>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default CertificadosCard;

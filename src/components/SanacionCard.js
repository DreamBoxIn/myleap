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
  Table,
  Tbody,
  Tr,
  Td,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faChevronDown,
  faChevronUp,
  faBatteryFull,
  faClock,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';

const SanacionCard = ({ handleIconClick, showSanacion, setShowSanacion }) => {
  return (
    <Card boxShadow="md" borderRadius="lg">
      <CardHeader bg="purple.500" color="white" borderTopRadius="lg">
        <Flex justifyContent="center" alignItems="center">
          <VStack>
            <IconButton
              icon={<FontAwesomeIcon icon={faHeart} size="2x" />}
              aria-label="Mostrar Balances"
              onClick={(e) => { e.stopPropagation(); handleIconClick('ShowBalancesComponent'); }}
            />
            <Text fontSize="lg" fontWeight="bold" onClick={(e) => { e.stopPropagation(); handleIconClick('ShowBalancesComponent'); }} cursor="pointer">LEAP</Text>
          </VStack>
        </Flex>
      </CardHeader>
      <CardBody>
        <Center>
          <Button onClick={(e) => { e.stopPropagation(); setShowSanacion(!showSanacion); }} rightIcon={showSanacion ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} variant="ghost" size="sm">
            {showSanacion ? 'Ver menos' : 'Ver más'}
          </Button>
        </Center>
        <Collapse in={showSanacion}>
          <Table variant="simple" mt={2} size="sm">
            <Tbody>
              <Tr>
                <Td><FontAwesomeIcon icon={faBatteryFull} size="sm" /></Td>
                <Td fontSize="xs">Mi Energía</Td>
                <Td fontSize="xs">xxx</Td>
              </Tr>
              <Tr>
                <Td><FontAwesomeIcon icon={faClock} size="sm" /></Td>
                <Td fontSize="xs">Nº Sesiones</Td>
                <Td fontSize="xs">xxx</Td>
              </Tr>
              <Tr>
                <Td><FontAwesomeIcon icon={faHandsHelping} size="sm" /></Td>
                <Td fontSize="xs">Sesiones Donadas</Td>
                <Td fontSize="xs">xx</Td>
              </Tr>
            </Tbody>
          </Table>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default SanacionCard;

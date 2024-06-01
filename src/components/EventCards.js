// src/components/EventCards.js

import React from 'react';
import { Box, SimpleGrid, Card, CardHeader, CardBody, Heading, Text, VStack, Button } from '@chakra-ui/react';

const EventCards = ({ events = [] }) => { // Agregamos un valor por defecto a events
  return (
    <Box mt={8} p={4} mb={32} boxShadow="md" borderRadius="lg">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map((event, index) => (
          <Card key={index} boxShadow="md" borderRadius="lg">
            <CardHeader bg="purple.500" color="white" borderTopRadius="lg">
              <Heading size="md">{event.title}</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Text><strong>Start:</strong> {new Date(event.start).toLocaleString()}</Text>
                <Text><strong>End:</strong> {new Date(event.end).toLocaleString()}</Text>
                <Text>{event.description}</Text>
                <Button colorScheme="purple">More Info</Button>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default EventCards;

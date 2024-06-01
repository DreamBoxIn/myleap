// src/components/UserLevelTag.js
import React from 'react';
import { Tag, Tooltip, Box, Progress, Text, VStack } from "@chakra-ui/react";

const UserLevelTag = ({ tokenAmount }) => {
  const getLevel = (tokens) => {
    if (tokens >= 10000) return 'VIP';
    if (tokens >= 1000) return 'Nivel 4';
    if (tokens >= 500) return 'Nivel 3';
    if (tokens >= 100) return 'Nivel 2';
    return 'Nivel 1';
  };

  const getNextLevelInfo = (tokens) => {
    if (tokens >= 10000) return { nextLevel: 'VIP', tokensNeeded: 0, maxTokens: 10000 };
    if (tokens >= 1000) return { nextLevel: 'VIP', tokensNeeded: 10000 - tokens, maxTokens: 10000 };
    if (tokens >= 500) return { nextLevel: 'Nivel 4', tokensNeeded: 1000 - tokens, maxTokens: 1000 };
    if (tokens >= 100) return { nextLevel: 'Nivel 3', tokensNeeded: 500 - tokens, maxTokens: 500 };
    return { nextLevel: 'Nivel 2', tokensNeeded: 100 - tokens, maxTokens: 100 };
  };

  const userLevel = getLevel(tokenAmount);
  const { nextLevel, tokensNeeded, maxTokens } = getNextLevelInfo(tokenAmount);

  return (
    <Tooltip
      label={
        <VStack spacing={2}>
          <Text>{`Tokens: ${tokenAmount.toFixed(8)}`}</Text>
          <Text>{`Próximo nivel: ${nextLevel}`}</Text>
          <Box width="100%">
            <Progress value={(tokenAmount / maxTokens) * 100} size="sm" colorScheme="teal" />
            <Text fontSize="xs">{`${tokensNeeded.toFixed(8)} tokens para el siguiente nivel`}</Text>
          </Box>
        </VStack>
      }
      aria-label="Nivel del usuario y progreso"
      placement="top"
    >
      <Tag colorScheme="teal" size="md" cursor="pointer">
        {userLevel}
      </Tag>
    </Tooltip>
  );
};

export default UserLevelTag;

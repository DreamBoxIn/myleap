// src/components/TestSupabaseConnection.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Box, Text } from '@chakra-ui/react';

const TestSupabaseConnection = () => {
  const [connected, setConnected] = useState(false);
  const [bucketExists, setBucketExists] = useState(false);

  useEffect(() => {
    const testConnection = async () => {
      // Reemplaza 'your_table_name' con el nombre de una tabla existente en tu base de datos
      const { data, error: connectionError } = await supabase
        .from('user_images')
        .select('*')
        .limit(1);

      setConnected(!connectionError);

      const { data: bucketData, error: bucketError } = await supabase
        .storage
        .from('images')
        .list('');

      setBucketExists(!bucketError);
    };

    testConnection();
  }, []);

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text>
        {connected ? 'Connected to Supabase' : 'Failed to connect to Supabase'}
      </Text>
      <Text>
        {bucketExists ? 'Bucket exists' : 'Bucket not found'}
      </Text>
    </Box>
  );
};

export default TestSupabaseConnection;
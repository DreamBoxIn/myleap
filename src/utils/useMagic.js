// src/utils/useMagic.js
import { Magic } from 'magic-sdk';
import { useEffect, useState } from 'react';

const customNodeOptionsSepolia = {
  network: 'sepolia',
};

const createMagic = (key) => {
  return typeof window !== 'undefined' && new Magic(key, customNodeOptionsSepolia);
};

const useMagic = (key) => {
  const [magic, setMagic] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [network, setNetwork] = useState("Sepolia Testnet");
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    if (key) {
      const magicInstance = createMagic(key);
      setMagic(magicInstance);
    }
  }, [key]);

  useEffect(() => {
    const checkUser = async () => {
      if (magic) {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          const metadata = await magic.user.getMetadata();
          setUser(metadata);
          const tokenAmount = await getTokenAmount(metadata.publicAddress); // Obtener cantidad de tokens
          setTokens(tokenAmount);
        }
        setLoading(false);
      }
    };

    const getTokenAmount = async (address) => {
      // Aquí deberías implementar la lógica para obtener la cantidad de tokens de la dirección del usuario.
      // Esto puede implicar hacer una llamada a la blockchain o a tu API.
      // Vamos a usar un valor simulado para este ejemplo:
      return 200; // Simulando que el usuario tiene 200 tokens
    };

    checkUser();
  }, [magic]);

  const login = async (email) => {
    await magic.auth.loginWithMagicLink({ email });
    const metadata = await magic.user.getMetadata();
    setUser(metadata);
    const tokenAmount = await getTokenAmount(metadata.publicAddress);
    setTokens(tokenAmount);
  };

  const logout = async () => {
    await magic.user.logout();
    setUser(null);
  };

  return { magic, user, login, logout, loading, network, tokens };
};

export default useMagic
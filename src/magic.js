import { Magic } from 'magic-sdk';
import { useEffect, useState } from 'react';

// Configuración de la red Sepolia Testnet
const customNodeOptionsSepolia = {
  network: 'sepolia', // Configuración de red para Sepolia Testnet
};

// Función para crear una instancia de Magic
const createMagic = (key) => {
  return typeof window !== 'undefined' && new Magic(key, customNodeOptionsSepolia);
};

const useMagic = (key) => {
  const [magic, setMagic] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [network, setNetwork] = useState("Sepolia Testnet");

  // Configuración inicial con Sepolia
  useEffect(() => {
    if (key) {
      const magicInstance = createMagic(key);
      setMagic(magicInstance);
    }
  }, [key]);

  // Verificar el estado del usuario
  useEffect(() => {
    const checkUser = async () => {
      if (magic) {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          const metadata = await magic.user.getMetadata();
          setUser(metadata);
        }
        setLoading(false);
      }
    };
    checkUser();
  }, [magic]);

  const login = async (email) => {
    await magic.auth.loginWithMagicLink({ email });
    const metadata = await magic.user.getMetadata();
    setUser(metadata);
  };

  const logout = async () => {
    await magic.user.logout();
    setUser(null);
  };

  return { magic, user, login, logout, loading, network };
};

export default useMagic;

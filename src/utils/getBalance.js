// src/utils/getBalance.js
export const getBalance = async (magic) => {
    try {
      const balance = await magic.user.getMetadata(); // Suponiendo que esta función devuelve el balance
      return balance.tokens; // Ajusta esto según cómo obtengas realmente el balance
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  };
  
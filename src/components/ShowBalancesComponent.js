// src/components/ShowBalancesComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowBalancesComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowBalances = () => {
    magic.wallet.showBalances({ method: 'popup' }); // Usar popup para modal flotante
  };

  return <Button onClick={handleShowBalances} colorScheme="blue">Mostrar Balances</Button>;
}

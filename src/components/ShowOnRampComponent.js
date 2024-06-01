// src/components/ShowOnRampComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowOnRampComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowOnRamp = () => {
    magic.wallet.showOnRamp({ method: 'popup' }); // Usar popup para modal flotante
  };

  return <Button onClick={handleShowOnRamp} colorScheme="blue">Mostrar OnRamp</Button>;
}

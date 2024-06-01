// src/components/ShowAddressComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowAddressComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowAddress = () => {
    magic.wallet.showAddress();
  };

  return <Button onClick={handleShowAddress} colorScheme="blue">Mostrar Dirección</Button>;
}

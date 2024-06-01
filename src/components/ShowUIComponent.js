// src/components/ShowUIComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowUIComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowUI = () => {
    magic.wallet.showUI();
  };

  return <Button onClick={handleShowUI} colorScheme="blue">Mostrar UI Completa</Button>;
}

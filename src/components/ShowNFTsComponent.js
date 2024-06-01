// src/components/ShowNFTsComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowNFTsComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowNFTs = () => {
    magic.wallet.showNFTs({ method: 'popup' }); // Usar popup para modal flotante
  };

  return <Button onClick={handleShowNFTs} colorScheme="blue">Mostrar NFTs</Button>;
}

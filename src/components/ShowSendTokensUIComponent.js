// src/components/ShowSendTokensUIComponent.js
import { Button } from "@chakra-ui/react";
import useMagic from '../magic';

export default function ShowSendTokensUIComponent() {
  const { magic } = useMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

  const handleShowSendTokens = () => {
    magic.wallet.showSendTokensUI();
  };

  return <Button onClick={handleShowSendTokens} colorScheme="blue">Enviar Tokens</Button>;
}

import { Flex, Button, Text, useColorMode } from "@chakra-ui/react";

export default function ThemeComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex m="2" align="center">
      <Button onClick={toggleColorMode}>Change Theme</Button>
      <Text
        ml="2"
        border="2px"
        w="semanticCustomSize"
        fontSize="semanticCustomFontSize"
        borderColor="semanticPrimary"
      >
        {colorMode}
      </Text>
    </Flex>
  );
}

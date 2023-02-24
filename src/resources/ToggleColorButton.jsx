import { Button, useColorMode } from "@chakra-ui/react";
import { HiOutlineSun, HiMoon } from "react-icons/hi";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Button
        m={2}
        colorScheme="twitter"
        variant="solid"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <HiMoon /> : <HiOutlineSun />}
      </Button>
    </header>
  );
};

export default ToggleColorMode;

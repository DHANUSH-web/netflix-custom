import React, { useState } from "react";
import "./App.css";
import {
  Center,
  Stack,
  WrapItem,
  Image,
  Text,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  StackItem,
} from "@chakra-ui/react";
import ModalWindow from "./components/ModalWindow";
import { images } from "./resources/utils";
import ToggleColorMode from "./resources/ToggleColorButton";

const App = () => {
  return (
    <>
      <ToggleColorMode />
      <Center h="100vh" className="container">
        <Stack align="center">
          <WrapItem>
            <Image id="logo" src={images.netflix_logo_classic} width={100} />
          </WrapItem>
          <WrapItem>
            <Text className="message" mb={3}>
              Welcome to Netflix
            </Text>
          </WrapItem>
          <WrapItem>
            <ModalWindow />
          </WrapItem>
          <WrapItem>
            <Button
              className="success"
              variant="solid"
              colorScheme="green"
              margin={2}
              width={100}
              onClick={() => {
                setMode("success");
              }}
            >
              Success
            </Button>
            <Button
              className="success"
              variant="solid"
              colorScheme="red"
              margin={2}
              width={100}
            >
              Error
            </Button>
          </WrapItem>
        </Stack>
      </Center>
    </>
  );
};

const AlertMode = ({mode, message}) => (
  <Alert status={mode}>
    <AlertIcon />
    <AlertDescription>{message}</AlertDescription>
  </Alert>
)

export default App;

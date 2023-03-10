import { Center, Stack, Image, Text, StackItem } from "@chakra-ui/react";
import AppDownloadCard from "./components/DownloadNetflix";
import ModalWindow from "./components/ModalWindow";
import data from "./resources/data.json";
import React from "react";
import "./App.css";
import firebase from "./firebase";

const App = () => {
  return (
    <>
      <Center h="100vh" className="container" bg="black">
        <Stack align="center">
            <Image
              id="logo"
              src={data.images.netflix_logo_classic}
              width={100}
            />
            <Text className="message" mb={3}>
              Welcome to Netflix
            </Text>
          <StackItem>
              <ModalWindow />
          </StackItem>
          <StackItem>
            <AppDownloadCard width="40px" />
          </StackItem>
        </Stack>
      </Center>
    </>
  );
};

export default App;

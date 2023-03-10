import {
  Center,
  HStack,
  Image,
  StackDivider,
  StackItem,
  Link,
} from "@chakra-ui/react";
import React from "react";
import data from "../resources/data.json";
import ModalWindow from "./ModalWindow";

const AppDownloadCard = ({ ...props }) => {
  return (
    <Center>
      <HStack
        justify="center"
        mt={5}
        id="container"
        divider={<StackDivider />}
        bg="#202020"
        borderRadius={15}
        p={6}
      >
        <StackItem className="appDownload" align="center" mr={6}>
          <Image
            className="appStore"
            src={data.images.playStore}
            width={props.width}
          />
          <Link href={data.urls.playStore}>Play Store</Link>
        </StackItem>
        <StackItem className="appDownload" align="center" ml={6}>
          <Image
            className="appStore"
            src={data.images.appleStore}
            width={props.width}
          />
          <Link href={data.urls.appleStore}>Apple Store</Link>
        </StackItem>
      </HStack>
    </Center>
  );
};

export default AppDownloadCard;

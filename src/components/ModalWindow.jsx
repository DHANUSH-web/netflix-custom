import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import React from "react";

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openNetflix = () => window.open("https://www.netflix.com/");

  return (
    <>
      <Button id="open-link" onClick={onOpen} colorScheme="facebook">
        Get Started
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader fontWeight="normal">
            Netflix Membership
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Click <Badge colorScheme="green">Buy</Badge> button to purchase
              the best plan of <Badge colorScheme="red">Netflix</Badge>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              className="buyButton"
              variant="ghost"
              colorScheme="twitter"
              onClick={openNetflix}
            >
              Buy
            </Button>
            <Button
              m={2}
              className="closeButton"
              colorScheme="gray"
              variant="solid"
              onClick={onClose}
            >
              No, thanks
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;

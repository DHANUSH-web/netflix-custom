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
import { Link as Hyper } from "react-router-dom";

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hyper to="/home">
        <Button
          id="open-link"
          colorScheme="facebook"
          width={150}
        >
          Get Started
        </Button>
      </Hyper>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader fontWeight="normal">Netflix Membership</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Click <Badge colorScheme="green">Buy</Badge> button to purchase
              the best plan of <Badge colorScheme="red">Netflix</Badge>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Hyper to="/home">
              <Button
                className="buyButton"
                variant="ghost"
                colorScheme="twitter"
                // onClick={openNetflix}
              >
                Buy
              </Button>
            </Hyper>
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

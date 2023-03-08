import {
  Box,
  Center,
  VStack,
  Avatar,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Divider,
  Button,
  Text,
  useToast,
  Checkbox,
  Alert,
} from "@chakra-ui/react";
import data from "../resources/data.json";
import { Link } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  // toast message
  const toast = useToast();

  // Handle password visibility
  const [show, setShow] = React.useState(false);
  const handlePassword = () => setShow(!show);

  // Handle email Input
  const [email, setInput] = React.useState('');
  const handleEmailInput = (e) => setInput(e.target.value);
  const isEmailEmpty = email === "";

  // Handle password input
  const [password, setPassword] = React.useState('');
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const isPasswordEmpty = password === '';

  const showAlert = () => {
    toast({
      status: "success",
      title: "We remember you",
    })
  }

  return (
    <Center h="100vh">
      <Box
        p={5}
        borderRadius={15}
        bg="blackAlpha.300"
        backdropFilter="blur(30px)"
      >
        <Center>
          <Avatar size="lg" src={data.images.netflix_logo_classic} />
        </Center>
        <VStack w={320} spacing={7} padding={5}>
          <InputGroup>
            <InputLeftAddon bg="teal" children={<SiNetflix />} />
            <Input type="email" placeholder="Email or Phone number" isRequired onChange={handleEmailInput} />
          </InputGroup>
          <InputGroup>
            <Input
              id="userPassword"
              type={show ? "text" : "password"}
              placeholder="Password"
              isRequired
              onChange={handlePasswordInput}
            />
            <InputRightAddon
              bg="teal"
              onClick={handlePassword}
              cursor="pointer"
              children={show ? <MdVisibilityOff /> : <MdVisibility/>}
            />
          </InputGroup>
          <Checkbox alignSelf="flex-start" colorScheme="teal">Remember me</Checkbox>
          <Button
            w="full"
            colorScheme="twitter"
            onClick={() => {
              toast({
                status: "info",
                title: "Message",
                description: `Email: ${email}, Password: ${password}`,
              })
            }}
            isDisabled={isEmailEmpty || isPasswordEmpty}
          >
            Login
          </Button>
          {/* <Divider /> */}
          <Box>
            <Text>
              Don't have an account ?{" "}
              <Link to="/register" className="register-hyper">Register</Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginPage;
import {
  Box,
  Center,
  VStack,
  Avatar,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Text,
  useToast,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import data from "../resources/data.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import React from "react";
import "./LoginPage.css";
import { pullDataBase, pushDataBase } from "../database";

const LoginPage = () => {
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const [email, setInput] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePassword = () => setShow(!show);
  const handleEmailInput = (e) => setInput(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const isEmailFilled = email !== "";
  const isPasswordFilled = password !== "";
  const isAllFieldsFilled = isPasswordFilled && isEmailFilled;

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
            <Input
              type="email"
              placeholder="Email or Phone number"
              isRequired
              onChange={handleEmailInput}
            />
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
              children={show ? <MdVisibilityOff /> : <MdVisibility />}
            />
          </InputGroup>
          <HStack alignSelf="flex-start">
            <Checkbox
              as={motion.div}
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              colorScheme="teal"
            />
            <Text>Remeber Me</Text>
          </HStack>
          <Button
            w="full"
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            colorScheme="messenger"
            variant="solid"
            onClick={() => {
              let username = email.split("@")[0];
              let db = pullDataBase({ root: "accounts"});

              if (username in db) {
                if (db[username].password === password)
                  toast({ status: "success", title: "Success", description: "Login Successful" })
                else
                  toast({ status: "error", title: 'Incorrect password', description: "Please enter the correct password" })
              }
              else
                toast({ status: "error", title: "SignUp", description: "You don't have an account.. please create a Netflix account"});
            }}
            isDisabled={!isAllFieldsFilled}
          >
            Login
          </Button>
          {/* <Divider /> */}
          <Box>
            <Text>
              Don't have an account ?{" "}
              <Link to="/register" className="register-hyper">
                Register
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginPage;

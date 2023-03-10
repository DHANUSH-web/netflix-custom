import React from "react";
import data from "../resources/data.json";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { pullData, pushData } from "../resources/database";
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
} from "@chakra-ui/react";
import {
  MdEmail,
  MdPhoneIphone,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const RegisterPage = () => {
  // toast message
  const toast = useToast();

  // handle display of password
  const [displayPassword, showPassword] = React.useState(false);
  const [displayConfirmPassword, showConfirmPassword] = React.useState(false);
  const handlePasswordVisibility = () => showPassword(!displayPassword);
  const handleConfirmPasswordVisibility = () =>
    showConfirmPassword(!displayConfirmPassword);

  const [email, updateEmail] = React.useState("");
  const [phoneNumber, updatePhoneNumber] = React.useState("");
  const [password, updatePassword] = React.useState("");
  const [confirmPassword, updateConfirmPassword] = React.useState("");
  const [termsAccept, updateTermsAccept] = React.useState(false);

  const handleEmail = (e) => updateEmail(e.target.value);
  const handlePassword = (e) => updatePassword(e.target.value);
  const handleConfirmPassword = (e) => updateConfirmPassword(e.target.value);
  const handlePhoneNumber = (e) => updatePhoneNumber(e.target.value);
  const handleTermsAcceptance = (e) => updateTermsAccept(e.target.checked);

  const isEmailFilled = email !== "";
  const isPhoneNumberFilled = phoneNumber !== "";
  const isPasswordFilled = password !== "";
  const isConfirmPasswordFilled = confirmPassword !== "";
  const isValidEmailId = email.endsWith(".com");
  const isValidPassword = password === confirmPassword;
  const isvalidPhoneNumber = phoneNumber.length === 10;
  const isStrongPassword = password.length === 0 || password.length >= 14;

  const isAllFieldsFilled =
    isEmailFilled &&
    isPhoneNumberFilled &&
    isPasswordFilled &&
    isConfirmPasswordFilled &&
    termsAccept &&
    isValidPassword;

  return (
    <Center h="100vh">
      <Box p={5} borderRadius={15} bg="#2c2c35" className="registerBox">
        <Center>
          <Avatar size="lg" src={data.images.netflix_logo_classic} />
        </Center>
        <VStack w={[320, 320, 400]} spacing={7} padding={5}>
          <InputGroup>
            <InputLeftAddon bg="teal" children={<MdEmail />} />
            <Input
              type="email"
              placeholder="Email Address"
              variant="filled"
              onChange={handleEmail}
              focusBorderColor={isValidEmailId ? "#00c0fc" : "red.300"}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bg="teal" children={<MdPhoneIphone />} />
            <Input
              type="number"
              placeholder="Phone Number"
              variant="filled"
              onChange={handlePhoneNumber}
              focusBorderColor={isvalidPhoneNumber ? "#00c0fc" : "red.300"}
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="userPassword"
              type={displayPassword ? "text" : "password"}
              placeholder="Password"
              variant="filled"
              focusBorderColor={isStrongPassword ? "#00c0fc" : "red.300"}
              onChange={handlePassword}
            />
            <InputRightAddon
              bg="teal"
              cursor="pointer"
              children={
                displayPassword ? <MdVisibilityOff /> : <MdVisibility />
              }
              onClick={handlePasswordVisibility}
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="confirmPassword"
              type={displayConfirmPassword ? "text" : "password"}
              variant="filled"
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
              focusBorderColor={isValidPassword ? "#00c0fc" : "red.300"}
            />
            <InputRightAddon
              bg="teal"
              onClick={handleConfirmPasswordVisibility}
              cursor="pointer"
              children={
                displayConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />
              }
            />
          </InputGroup>
          <Checkbox
            size="sm"
            alignSelf="flex-start"
            fontWeight="200"
            onChange={handleTermsAcceptance}
          >
            Accept Terms and Conditions
          </Checkbox>
          <Button
            w="full"
            className="button-register"
            colorScheme="twitter"
            onClick={() => {
              let userName = email.split("@")[0];
              pushData({
                root: 'accounts/' + userName,
                data: {
                  emailId: email,
                  password: password,
                  phoneNumber: phoneNumber,
                },
              });

              toast({
                status: "success",
                position: "bottom-right",
                title: userName,
                description: "Account created successfully",
              });
            }}
            isDisabled={!isAllFieldsFilled}
          >
            SignUp
          </Button>
          {/* <Divider /> */}
          <Box>
            <Text>
              Already have an account ?{" "}
              <Link to="/login" className="register-hyper">
                SignIn
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterPage;

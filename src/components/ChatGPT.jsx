import React from "react";
import { OpenAIApi, Configuration } from "openai";
import {
  Badge,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";
import "./ChatGPT.css";


const ChatGPT = () => {
  const [generatedText, setResponse] = React.useState(
    "Try to ask something..."
  );
  const [userResponse, setUserResponse] = React.useState("");
  const config = new Configuration({
    apiKey: "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",
  });

  // Initialize the OpenAI with API key
  const openai = new OpenAIApi(config);

  const generateText = async ({ ...props }) => {
    const prompt = props.prompt;
    const parameters = {
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 1000,
      n: 1,
      stop: "",
    };

    try {
      if (userResponse === '')
        setResponse("Please ask something...")
      else {
        setResponse("OpenAI on the way....");
        const response = await openai.createCompletion(parameters);
        const data = response.data.choices[0].text;
        console.log(data);
        setResponse(data);
      }
    } catch (exception) {
      setResponse("Something went wrong");
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter")
        generateText({ prompt: userResponse });
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  })

  return (
    <Center h="100vh">
      <VStack
        p={5}
        className="container"
        width={[500, 500, 500, 700, 900, 1000]}
        spacing={5}
      >
        <Text
          w="full"
          align="justify"
          bg="blackAlpha.500"
          p={5}
          borderRadius={15}
          fontFamily="googleSansLight"
          fontSize={{ sm: "15px", md: "20px", lg: "25px" }}
        >
          {generatedText}
          <Badge as={motion.button} whileTap={{ scale: 0.5 }} ml={2}>Copy</Badge>
        </Text>
        <InputGroup>
          <Input
            type="text"
            placeholder="Ask anything..."
            onChange={(e) => setUserResponse(e.target.value)}
            fontFamily="googlesanslight"
          />
          <InputRightAddon
            as={motion.button}
            whileTap={{ scale: 0.9 }}
            children={<MdSend />}
            bg="teal.500"
            cursor="pointer"
            onClick={() => generateText({ prompt: userResponse })}
          />
        </InputGroup>
      </VStack>
    </Center>
  );
};

export default ChatGPT;

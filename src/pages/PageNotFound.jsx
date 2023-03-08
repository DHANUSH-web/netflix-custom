// import { Box, Button, Center, Text, useToast, HStack } from "@chakra-ui/react";
// import "./PageNotFound.css";
// import React from "react";

// const PageNotFound = () => {
//   const toast = useToast();
//   const toastIdRef = React.useRef();

//   const updatePromise = (props) => {
//     if (toastIdRef.current)
//       toast.update(toastIdRef.current, {
//         status: props.status,
//         title: props.title,
//         description: props.desc,
//       });
//   };

//   const addToast = (props) => {
//     toastIdRef.current = toast({
//       status: props.status,
//       title: props.title,
//       description: props.desc,
//     });
//   };

//   return (
//     <Center h="100vh" className="pageNotFound">
//       <Box textAlign="center" alignItems="center">
//         <Text className="page-message">Hey.. You are in Neflix Dessert</Text>
//         <HStack mt={5}>
//           <Button
//             onClick={() =>
//               addToast({
//                 status: "loading",
//                 title: "Loading",
//                 desc: "Hosting your website...",
//               })
//             }
//             colorScheme="twitter"
//           >
//             Loading Toast
//           </Button>
//           <Button
//             onClick={() =>
//               updatePromise({
//                 status: "success",
//                 title: "Success",
//                 desc: "Hosting is completed",
//               })
//             }
//             colorScheme="green"
//           >
//             Success Toast
//           </Button>
//         </HStack>
//       </Box>
//     </Center>
//   );
// };
// export default PageNotFound;

import React from "react";
import { Flex, Box, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        mt={{ base: 10, md: 20 }}
      >
        <Box flex={1} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
            404
          </Text>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            mt={5}
          >
            Oops! Page not found
          </Text>
          <Text color="gray.500" mt={5} fontSize={{ base: "md", md: "xl" }}>
            Sorry, we couldn't find the page you're looking for. Maybe you
            mistyped the URL or the page has been removed.
          </Text>
          <Link to="/login">
            <Button
              colorScheme="blue"
              size="lg"
              fontSize="md"
              mt={10}
            >
              Go back
            </Button>
          </Link>
        </Box>
      </Flex>
    </Center>
  );
}

export default PageNotFound;

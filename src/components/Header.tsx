import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bgColor={"red.500"} p={4} w={"full"}>
      <Text
        as={"h1"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        color="white"
        textAlign={"center"}
      >
        GraphQLとNext.jsで作るTODOアプリ
      </Text>
    </Box>
  );
};

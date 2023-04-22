import { Image, Center, Text } from "@chakra-ui/react";

export const NoTodo = () => {
  return (
    <Center w={"full"} h={"full"} flexDirection={"column"} py={24}>
      <Image src="/nodata.svg" alt="No todo" />
      <Text fontSize="3xl" fontWeight="bold" color="gray.700">
        登録されているTODO はありません
      </Text>
    </Center>
  );
};

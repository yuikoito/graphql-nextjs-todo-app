import { CircularProgress, Center } from "@chakra-ui/react";

type Props = {
  isLoading: boolean;
};
export const Loading: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Center
      w="100vw"
      h="100vh"
      backgroundColor={"blackAlpha.300"}
      position={"fixed"}
      left={0}
      top={0}
      zIndex={9999}
    >
      <CircularProgress isIndeterminate color="red.500" size={16} />
    </Center>
  );
};

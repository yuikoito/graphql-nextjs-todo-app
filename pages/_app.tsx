import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { ChakraProvider } from "@chakra-ui/react";

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

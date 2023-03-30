import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

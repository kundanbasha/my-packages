import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { theme } from "@/theme";

export default function App({ Component, pageProps }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

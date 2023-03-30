import { extendTheme } from "@chakra-ui/react";
//foundations
import { colors } from "./foundations/colors";
import { fontSizes } from "./foundations/font-sizes";
import { sizes } from "./foundations/sizes";

//components
import { Button } from "./components/button";

//semantic tokens
import { semanticTokens } from "./semantic-tokens";

const theme = extendTheme({
  colors,
  fontSizes,
  sizes,

  components: {
    Button,
  },

  semanticTokens,
});

export default theme;

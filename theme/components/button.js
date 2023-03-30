import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
    fontSize: "base",
    _dark: {
      textTransform: "lowercase",
    },
  },
  variants: {
    "with-shadow": (props) => ({
      boxShadow: "0 0 2px 2px rgba(0,0,0,0.1)",
      bg: "primary.default",
      color: "white",
      _hover: {
        bg: "primary.100",
        _dark: {
          bg: "primary.900",
        },
      },
      _dark: {
        color: "white",
      },
    }),
    danger: {
      bg: "red",
    },
    success: {
      bg: "green",
    },
  },
  sizes: {},
  defaultProps: {
    variant: "with-shadow",
  },
});

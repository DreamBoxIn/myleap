import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.100",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "lg",
      },
      sizes: {
        lg: {
          h: "48px",
          fontSize: "lg",
          px: "32px",
        },
        md: {
          h: "36px",
          fontSize: "md",
          px: "24px",
        },
        sm: {
          h: "28px",
          fontSize: "sm",
          px: "16px",
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "purple.500" : "purple.400",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "purple.600" : "purple.500",
          },
        }),
      },
    },
  },
  colors: {
    purple: {
      50: "#f3e8ff",
      100: "#d9bffd",
      200: "#be95fc",
      300: "#a36afc",
      400: "#8940fb",
      500: "#6f00e6",
      600: "#5b00b4",
      700: "#450082",
      800: "#300051",
      900: "#1b0021",
    },
  },
});

export default theme;


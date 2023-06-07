import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
   backgrounds: {
      default: "light", // Set the default background color
      values: [
        { name: "light", value: "#ffffff" }, // Define your custom background colors
        { name: "dark", value: "#1e1e1e" },
      ],
    }, 
  },
};

export default preview;

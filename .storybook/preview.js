/** @type { import('@storybook/react').Preview } */
import "../src/styles/globals.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#F5F0E8",
        },
        {
          name: "dark",
          value: "#0D0D0D",
        },
        {
          name: "white",
          value: "#FFFFFF",
        },
        {
          name: "black",
          value: "#000000",
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <div data-theme={theme} style={{ minHeight: "100vh", padding: "2rem" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

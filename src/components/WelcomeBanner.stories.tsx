import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeBanner } from "./WelcomeBanner";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof WelcomeBanner> = {
  title: "Components/WelcomeBanner",
  component: WelcomeBanner,
  tags: ["autodocs"],
  argTypes: {
    basePath: { control: "text" },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeBanner>;

export const Default: Story = {
  args: {
    basePath: "/dashboard",
  },
};

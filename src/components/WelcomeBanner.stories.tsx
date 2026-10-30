import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeBanner } from "./WelcomeBanner";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof WelcomeBanner> = {
  title: "Components/WelcomeBanner",
  component: WelcomeBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeBanner>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "600px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: {
    basePath: "/programs/ai-seeds",
  },
};

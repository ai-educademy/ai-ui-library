import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-6 flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] min-h-[150px]">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-medium">Click to toggle color theme:</span>
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

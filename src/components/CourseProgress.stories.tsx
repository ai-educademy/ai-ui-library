import type { Meta, StoryObj } from "@storybook/react";
import { CourseProgress } from "./CourseProgress";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof CourseProgress> = {
  title: "Components/CourseProgress",
  component: CourseProgress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CourseProgress>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "400px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: {
    totalLessons: 5,
    basePath: "/lessons",
    programSlug: "ai-seeds",
  },
};

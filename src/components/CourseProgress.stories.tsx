import type { Meta, StoryObj } from "@storybook/react";
import { CourseProgress } from "./CourseProgress";

const meta: Meta<typeof CourseProgress> = {
  title: "Components/CourseProgress",
  component: CourseProgress,
  tags: ["autodocs"],
  argTypes: {
    totalLessons: { control: { type: "number", min: 1, max: 20 } },
    basePath: { control: "text" },
    programSlug: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CourseProgress>;

export const Default: Story = {
  args: {
    totalLessons: 5,
    basePath: "/lessons",
    programSlug: "ai-basics",
  },
};

export const Completed: Story = {
  args: {
    totalLessons: 3,
    basePath: "/lessons",
    programSlug: "ai-basics-completed",
  },
};

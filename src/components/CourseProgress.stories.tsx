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
  args: {
    totalLessons: 10,
    basePath: "#lessons",
    programSlug: "ai-seeds",
  },
};

export default meta;
type Story = StoryObj<typeof CourseProgress>;

export const Default: Story = {
  render: (args) => {
    // Seed local storage with some completed lessons for demonstration
    if (typeof window !== "undefined") {
      const STORAGE_KEY = "ai-educademy-progress";
      const progressData = {
        [args.programSlug || "ai-seeds"]: {
          completed: ["lesson-1", "lesson-2", "lesson-3", "lesson-4"],
          timestamps: {
            "lesson-1": new Date().toISOString(),
            "lesson-2": new Date().toISOString(),
            "lesson-3": new Date().toISOString(),
            "lesson-4": new Date().toISOString(),
          },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    }
    return <CourseProgress {...args} />;
  },
};

export const InProgress: Story = {
  render: (args) => {
    if (typeof window !== "undefined") {
      const STORAGE_KEY = "ai-educademy-progress";
      const progressData = {
        [args.programSlug || "ai-seeds"]: {
          completed: ["lesson-1", "lesson-2"],
          timestamps: {
            "lesson-1": new Date().toISOString(),
            "lesson-2": new Date().toISOString(),
          },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    }
    return <CourseProgress {...args} totalLessons={5} basePath="#continue" programSlug={args.programSlug} />;
  },
};

export const AllCompleted: Story = {
  render: (args) => {
    if (typeof window !== "undefined") {
      const STORAGE_KEY = "ai-educademy-progress";
      const progressData = {
        [args.programSlug || "ai-seeds"]: {
          completed: ["l1", "l2", "l3"],
          timestamps: {
            l1: new Date().toISOString(),
            l2: new Date().toISOString(),
            l3: new Date().toISOString(),
          },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    }
    return <CourseProgress {...args} totalLessons={3} basePath="#restart" programSlug={args.programSlug} />;
  },
};

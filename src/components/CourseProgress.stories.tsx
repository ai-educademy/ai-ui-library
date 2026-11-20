import type { Meta, StoryObj } from "@storybook/react";
import { CourseProgress } from "./CourseProgress";
import { useEffect } from "react";
import { useProgress } from "../hooks/useProgress";

const meta: Meta<typeof CourseProgress> = {
  title: "Components/CourseProgress",
  component: CourseProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CourseProgress>;

function MockProgressInitializer({ completedLessons, programSlug }: { completedLessons: string[]; programSlug: string }) {
  const { markComplete } = useProgress(programSlug);
  useEffect(() => {
    completedLessons.forEach((l) => markComplete(`${programSlug}/${l}`));
  }, [completedLessons, markComplete, programSlug]);
  return null;
}

export const Default: Story = {
  render: () => {
    const slug = "story-demo-1";
    return (
      <div className="w-[400px]">
        <MockProgressInitializer completedLessons={["lesson-1", "lesson-2"]} programSlug={slug} />
        <CourseProgress totalLessons={5} basePath="#" programSlug={slug} />
      </div>
    );
  },
};

export const AllComplete: Story = {
  render: () => {
    const slug = "story-demo-2";
    return (
      <div className="w-[400px]">
        <MockProgressInitializer completedLessons={["lesson-1", "lesson-2", "lesson-3"]} programSlug={slug} />
        <CourseProgress totalLessons={3} basePath="#" programSlug={slug} />
      </div>
    );
  },
};

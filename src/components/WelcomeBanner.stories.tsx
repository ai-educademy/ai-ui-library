import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeBanner } from "./WelcomeBanner";
import { useEffect } from "react";

const meta: Meta<typeof WelcomeBanner> = {
  title: "Components/WelcomeBanner",
  component: WelcomeBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WelcomeBanner>;

function MockGuestInitializer({ name, avatar }: { name: string; avatar: string }) {
  useEffect(() => {
    localStorage.setItem(
      "ai-educademy-guest",
      JSON.stringify({ name, avatar, createdAt: new Date().toISOString() })
    );
  }, [name, avatar]);
  return null;
}

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <MockGuestInitializer name="Alex" avatar="🚀" />
      <WelcomeBanner basePath="/learn" />
    </div>
  ),
};

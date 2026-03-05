import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline", "accent"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Get Started", variant: "primary", size: "md" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary", size: "md" },
};

export const Ghost: Story = {
  args: { children: "Skip", variant: "ghost", size: "md" },
};

export const Outline: Story = {
  args: { children: "View Details", variant: "outline", size: "md" },
};

export const Accent: Story = {
  args: { children: "🎉 Celebrate!", variant: "accent", size: "lg" },
};

export const Loading: Story = {
  args: { children: "Saving…", variant: "primary", loading: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

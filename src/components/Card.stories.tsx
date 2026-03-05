import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Button } from "./Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "glass", "outline"],
    },
    hover: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: "0 0 8px" }}>AI Seeds</h3>
        <p style={{ margin: 0, opacity: 0.7 }}>
          Start your AI journey — zero experience needed.
        </p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    hover: true,
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Badge variant="success">Beginner</Badge>
        <h3 style={{ margin: 0 }}>What is Artificial Intelligence?</h3>
        <p style={{ margin: 0, opacity: 0.7 }}>
          Learn the basics of AI in 10 minutes.
        </p>
        <Button variant="primary" size="sm">
          Start Lesson →
        </Button>
      </div>
    ),
  },
};

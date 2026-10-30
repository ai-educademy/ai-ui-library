import type { Meta, StoryObj } from "@storybook/react";
import { ScrollReveal } from "./ScrollReveal";
import { Card } from "./Card";

const meta: Meta<typeof ScrollReveal> = {
  title: "Components/ScrollReveal",
  component: ScrollReveal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    animation: {
      control: "select",
      options: ["fade-up", "fade-in", "scale-in", "slide-left", "slide-right"],
    },
    delay: { control: "number" },
    stagger: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const Default: Story = {
  args: {
    animation: "fade-up",
    delay: 100,
    children: (
      <Card style={{ width: "350px", padding: "24px" }}>
        <h3 style={{ margin: "0 0 8px" }}>Scroll Reveal Card</h3>
        <p style={{ margin: 0, opacity: 0.7 }}>
          This card animates smoothly when it scrolls into view.
        </p>
      </Card>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { ScrollReveal } from "./ScrollReveal";
import { Card } from "./Card";

const meta: Meta<typeof ScrollReveal> = {
  title: "Components/ScrollReveal",
  component: ScrollReveal,
  tags: ["autodocs"],
  argTypes: {
    animation: {
      control: "select",
      options: ["fade-up", "fade-in", "scale-in", "slide-left", "slide-right"],
    },
    delay: { control: { type: "number", min: 0, max: 1000, step: 100 } },
    stagger: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const FadeUp: Story = {
  args: {
    animation: "fade-up",
    delay: 100,
    children: (
      <Card title="Scroll Reveal Card" description="This card animates into view when scrolled into the viewport." />
    ),
  },
};

export const ScaleIn: Story = {
  args: {
    animation: "scale-in",
    delay: 200,
    children: (
      <Card title="Scaled Animation" description="Smooth scale-in entrance effect." />
    ),
  },
};

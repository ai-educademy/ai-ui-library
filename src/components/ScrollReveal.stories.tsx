import type { Meta, StoryObj } from "@storybook/react";
import { ScrollReveal } from "./ScrollReveal";

const meta: Meta<typeof ScrollReveal> = {
  title: "Components/ScrollReveal",
  component: ScrollReveal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    animation: {
      control: "select",
      options: ["fade-up", "fade-in", "scale-in", "slide-left", "slide-right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const Default: Story = {
  args: {
    animation: "fade-up",
    children: (
      <div className="p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl shadow-sm w-80 text-[var(--color-text)]">
        <h3 className="text-lg font-semibold mb-2">Scroll Reveal Card</h3>
        <p className="text-sm text-[var(--color-text-muted)]">
          This content animates smoothly into view when scrolled into the viewport.
        </p>
      </div>
    ),
  },
};

export const Animations: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <ScrollReveal animation="fade-up">
        <div className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <h4 className="font-medium">Fade Up</h4>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-in">
        <div className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <h4 className="font-medium">Fade In</h4>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="scale-in">
        <div className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <h4 className="font-medium">Scale In</h4>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="slide-left">
        <div className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <h4 className="font-medium">Slide Left</h4>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="slide-right">
        <div className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
          <h4 className="font-medium">Slide Right</h4>
        </div>
      </ScrollReveal>
    </div>
  ),
};

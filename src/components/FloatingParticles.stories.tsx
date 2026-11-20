import type { Meta, StoryObj } from "@storybook/react";
import { FloatingParticles } from "./FloatingParticles";

const meta: Meta<typeof FloatingParticles> = {
  title: "Components/FloatingParticles",
  component: FloatingParticles,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatingParticles>;

export const Default: Story = {
  render: () => (
    <div className="relative w-[500px] h-[300px] bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden flex items-center justify-center">
      <FloatingParticles />
      <div className="z-10 text-center p-6 text-[var(--color-text)]">
        <h3 className="text-xl font-bold mb-2">Floating Particles Background</h3>
        <p className="text-sm text-[var(--color-text-muted)]">Subtle animated canvas particles and constellation connections.</p>
      </div>
    </div>
  ),
};

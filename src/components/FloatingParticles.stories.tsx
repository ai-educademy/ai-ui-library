import type { Meta, StoryObj } from "@storybook/react";
import { FloatingParticles } from "./FloatingParticles";

const meta: Meta<typeof FloatingParticles> = {
  title: "Components/FloatingParticles",
  component: FloatingParticles,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatingParticles>;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", width: "100%", height: 300, background: "var(--color-bg, #0f172a)", borderRadius: 16, overflow: "hidden" }}>
      <FloatingParticles />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "sans-serif" }}>
        <h3>Floating Particles Background Effect</h3>
      </div>
    </div>
  ),
};

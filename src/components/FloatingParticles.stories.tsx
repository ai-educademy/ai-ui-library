import type { Meta, StoryObj } from "@storybook/react";
import { FloatingParticles } from "./FloatingParticles";
import { ThemeProvider } from "./ThemeProvider";

const meta: Meta<typeof FloatingParticles> = {
  title: "Components/FloatingParticles",
  component: FloatingParticles,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FloatingParticles>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ position: "relative", width: "100vw", height: "400px", background: "var(--color-bg)" }}>
          <Story />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-text)", margin: 0 }}>Interactive Hero Background</h2>
            <p style={{ color: "var(--color-text-muted)", margin: "8px 0 0" }}>Floating canvas particles with theme adaptation</p>
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

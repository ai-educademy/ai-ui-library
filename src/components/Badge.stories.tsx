import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
    },
    size: { control: "select", options: ["sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Default" } };
export const Success: Story = { args: { children: "Completed", variant: "success" } };
export const Warning: Story = { args: { children: "In Progress", variant: "warning" } };
export const Error: Story = { args: { children: "Failed", variant: "error" } };
export const Info: Story = { args: { children: "New", variant: "info" } };

export const CustomColor: Story = {
  args: { children: "AI Seeds", color: "#10b981" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge color="#6366f1">Custom</Badge>
    </div>
  ),
};

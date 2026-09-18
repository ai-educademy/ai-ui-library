import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

function ModalDemo({ size = "md" as const, title = "Example Modal" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title={title} size={size}>
        <p className="text-[var(--color-text-muted)]">
          This is a modal dialog with smooth animations, backdrop blur, keyboard support (Escape to close), and focus trapping.
        </p>
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          <Button size="sm" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Small: Story = {
  render: () => <ModalDemo size="sm" title="Small Modal" />,
};

export const Large: Story = {
  render: () => <ModalDemo size="lg" title="Large Modal" />,
};

function MinimalModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Minimal Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center py-4">
          <p className="text-2xl mb-2">🎉</p>
          <p className="text-[var(--color-text)] font-semibold">Achievement Unlocked!</p>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">You completed your first lesson.</p>
          <Button size="sm" className="mt-4" onClick={() => setOpen(false)}>Awesome!</Button>
        </div>
      </Modal>
    </>
  );
}

export const NoTitle: Story = {
  render: () => <MinimalModalDemo />,
};

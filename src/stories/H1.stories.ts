import type { Meta, StoryObj } from "@storybook/react";
import H1 from "../components/h1";

const meta: Meta<typeof H1> = {
  title: "Evento/H1",
  component: H1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TailwindClasses: Story = {
  args: {
    children: "Tiny Lions Create Roaring Challenges",
    classes: "text-[#50D71E]",
  },
};

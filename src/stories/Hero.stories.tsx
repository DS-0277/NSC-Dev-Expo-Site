import type { Meta, StoryObj } from "@storybook/react";
import Hero from "../components/Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    title: "North Seattle Application Development",
    subtitle: "Developing IT students of the future",
    buttonLabel: "Join Us",
    pageName: "home",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StudentStory: Story = {
  args: {
    title: "The Student Story",
    subtitle: "Building your career and community",
    pageName: "student-story",
    infoHeading: "This is our proving grounds",
    infoDescription:
      "We can help you and you can help us. We have budding IT students eager to learn and build real world development skills.",
  },
};

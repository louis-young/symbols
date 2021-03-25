import { Story, Meta } from "@storybook/react/types-6-0";
import { DarkModeToggle } from ".";
import type { DarkModeToggleProps } from "./types";

export default {
  title: "DarkModeToggle",
  component: DarkModeToggle,
} as Meta;

const defaultDarkModeToggleProps = {
  darkMode: false,
  toggleDarkMode: () => {},
};
const Template: Story<DarkModeToggleProps> = (args) => (
  <DarkModeToggle {...args} />
);

export const Light = Template.bind({});

Light.args = {
  ...defaultDarkModeToggleProps,
};

export const Dark = Template.bind({});

Dark.args = {
  ...defaultDarkModeToggleProps,
  darkMode: true,
};

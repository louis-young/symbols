import { Story, Meta } from "@storybook/react/types-6-0";
import { Logo } from ".";
import type { LogoProps } from "./types";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSearchQueryChange: () => {},
  onSelectedCategoryChange: () => {},
};

import { Story, Meta } from "@storybook/react/types-6-0";
import { Header } from ".";
import type { HeaderProps } from "./types";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};

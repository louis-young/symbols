import { Story, Meta } from "@storybook/react/types-6-0";
import { Sidebar } from ".";
import type { SidebarProps } from "./types";

export default {
  title: "Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

Default.args = {};

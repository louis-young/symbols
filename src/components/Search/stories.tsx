import { Story, Meta } from "@storybook/react/types-6-0";
import { Search } from ".";
import type { SearchProps } from "./types";

export default {
  title: "Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {};

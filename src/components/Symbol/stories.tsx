import { Story, Meta } from "@storybook/react/types-6-0";
import { Symbol } from ".";
import type { SymbolProps } from "./types";

export default {
  title: "Symbol",
  component: Symbol,
} as Meta;

const Template: Story<SymbolProps> = (args) => <Symbol {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Copyright",
  symbol: "©",
};

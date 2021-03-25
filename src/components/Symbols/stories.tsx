import { Story, Meta } from "@storybook/react/types-6-0";
import { Symbols } from ".";
import type { SymbolsProps } from "./types";
import database from "../../data/database.json";

export default {
  title: "Symbols",
  component: Symbols,
} as Meta;

const Template: Story<SymbolsProps> = (args) => <Symbols {...args} />;

export const Default = Template.bind({});

Default.args = {
  symbols: database,
};

export const Empty = Template.bind({});

Empty.args = {
  symbols: [],
};

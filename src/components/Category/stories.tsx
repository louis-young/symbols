import { Story, Meta } from "@storybook/react/types-6-0";
import { popular } from "../../assets/icons";
import { SymbolCategories } from "../../types/symbolCategories";
import { Category } from ".";
import type { CategoryProps } from "./types";

export default {
  title: "Category",
  component: Category,
} as Meta;

const defaultCategoryProps = {
  name: "Popular",
  category: SymbolCategories.Popular,
  isActive: false,
  icon: popular,
  onCategoryChange: () => {},
};
const Template: Story<CategoryProps> = (args) => <Category {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...defaultCategoryProps,
};

export const Active = Template.bind({});

Active.args = {
  ...defaultCategoryProps,
  isActive: true,
};

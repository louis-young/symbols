import { Story, Meta } from "@storybook/react/types-6-0";
import { Categories } from ".";
import { SymbolCategories } from "../../types/symbolCategories";
import type { CategoriesProps } from "./types";

export default {
  title: "Categories",
  component: Categories,
} as Meta;

const Template: Story<CategoriesProps> = (args) => <Categories {...args} />;

export const Default = Template.bind({});

Default.args = {
  selectedCategory: SymbolCategories.Popular,
  onSelectedCategoryChange: () => {},
};

import { Story, Meta } from "@storybook/react/types-6-0";
import { Copyright } from ".";

export default {
  title: "Copyright",
  component: Copyright,
} as Meta;

const Template: Story = (args) => <Copyright {...args} />;

export const Default = Template.bind({});

Default.args = {};

/** @jsx h */
import { h } from "preact";
import { InputBox } from "../../../../lib/components/inputBox";

export default {
  title: "Components/InputBox",
  component: InputBox,
  argTypes: {
    disabled: {
      defautValue: false,
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: "Sample Label",
  notification: {
    message: "Sample Notification",
    status: 0,
  },
  placeholder: "Type Something dude",
};

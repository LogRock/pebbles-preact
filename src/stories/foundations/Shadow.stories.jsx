/** @jsx h */
import { h } from "preact";
import Shadow from "./Shadow";

export default {
  title: "Foundations/Shadows",
  component: Shadow,
  argTypes: {
    value: {
      options: [
        "xSmall",
        "small",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
        "upXSmall",
        "upSmall",
        "upMedium",
        "upLarge",
        "upXLarge",
        "upXxLarge",
      ],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Shadow {...args} />;

export const xSmall = Template.bind({});
xSmall.args = {
  variant: "xSmall",
};

export const small = Template.bind({});
small.args = {
  variant: "small",
};

export const medium = Template.bind({});
medium.args = {
  variant: "medium",
};

export const large = Template.bind({});
large.args = {
  variant: "large",
};

export const xLarge = Template.bind({});
xLarge.args = {
  variant: "xLarge",
};

export const xxLarge = Template.bind({});
xxLarge.args = {
  variant: "xxLarge",
};

export const upXSmall = Template.bind({});
upXSmall.args = {
  variant: "upXSmall",
};

export const upSmall = Template.bind({});
upSmall.args = {
  variant: "upSmall",
};

export const upMedium = Template.bind({});
upMedium.args = {
  variant: "upMedium",
};

export const upLarge = Template.bind({});
upLarge.args = {
  variant: "upLarge",
};

export const upXLarge = Template.bind({});
upXLarge.args = {
  variant: "upXLarge",
};

export const upXxLarge = Template.bind({});
upXxLarge.args = {
  variant: "upXxLarge",
};

/** @jsx h */
import { h, Fragment } from 'preact';
import Color from './Color';

export default {
  title: 'Foundations/Colors/Primary Colors',
  component: Color,
  argTypes: {
    color: {
      options: ['neutral', 'primary', 'secondary', 'success', 'alert', 'warning', 'error'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Fragment>
    <Color {...args} value="50" />
    <Color {...args} value="100" />
    <Color {...args} value="200" />
    <Color {...args} value="300" />
    <Color {...args} value="400" />
    <Color {...args} value="500" />
    <Color {...args} value="600" />
    <Color {...args} value="700" />
    <Color {...args} value="800" />
    <Color {...args} value="900" />
  </Fragment>

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral'
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  color: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  color: 'error'
};
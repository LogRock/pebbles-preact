/** @jsx h */
import { h } from 'preact';
import Shadow from './Shadow';

export default {
  title: 'Foundations/Shadows',
  component: Shadow,
  argTypes: {
    value: {
      options: [
        xSmall, 
        small, 
        medium, 
        large, 
        xLarge, 
        xxLarge, 
        upXSmall, 
        upSmall, 
        upMedium, 
        upLarge, 
        upXLarge, 
        upXxLarge
      ],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Shadow {...args} />

export const xSmall = Template.bind({});
xSmall.args = {
  size: 'xSmall'
};

export const small = Template.bind({});
small.args = {
  size: 'small'
};

export const medium = Template.bind({});
medium.args = {
  size: 'medium'
};

export const large = Template.bind({});
large.args = {
  size: 'large'
};

export const xLarge = Template.bind({});
xLarge.args = {
  size: 'xLarge'
};

export const xxLarge = Template.bind({});
xxLarge.args = {
  size: 'xxLarge'
};

export const upXSmall = Template.bind({});
upXSmall.args = {
  size: 'upXSmall'
};

export const upSmall = Template.bind({});
upSmall.args = {
  size: 'upSmall'
};

export const upMedium = Template.bind({});
upMedium.args = {
  size: 'upMedium'
};

export const upLarge = Template.bind({});
upLarge.args = {
  size: 'upLarge'
};

export const upXLarge = Template.bind({});
upXLarge.args = {
  size: 'upXLarge'
};

export const upXxLarge = Template.bind({});
upXxLarge.args = {
  size: 'upXxLarge'
};
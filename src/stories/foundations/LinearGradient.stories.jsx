/** @jsx h */
import { h, Fragment } from 'preact';
import LinearGradient from './LinearGradient';

export default {
  title: 'Foundations/Colors/Linear Gradients',
  component: LinearGradient,
  argTypes: {
    name: {
      options: [
        'sunburst',
        'darkWineSea',
        'cherryCola',
        'coldSky',
        'oliveGarden',
        'morningSakura',
        'blueMoon',
        'synthwave',
        'teaLeaves',
        'blueberryWine'
      ],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <LinearGradient {...args} />
    
export const sunburst = Template.bind({});
sunburst.args = {
  name: 'sunburst'
};

export const darkWineSea = Template.bind({});
darkWineSea.args = {
  name: 'darkWineSea'
};

export const cherryCola = Template.bind({});
cherryCola.args = {
  name: 'cherryCola'
};

export const coldSky = Template.bind({});
coldSky.args = {
  name: 'coldSky'
};

export const oliveGarden = Template.bind({});
oliveGarden.args = {
  name: 'oliveGarden'
};

export const morningSakura = Template.bind({});
morningSakura.args = {
  name: 'morningSakura'
};

export const blueMoon = Template.bind({});
blueMoon.args = {
  name: 'blueMoon'
};

export const synthwave = Template.bind({});
synthwave.args = {
  name: 'synthwave'
};

export const teaLeaves = Template.bind({});
teaLeaves.args = {
  name: 'teaLeaves'
};

export const blueberryWine = Template.bind({});
blueberryWine.args = {
  name: 'blueberryWine'
};


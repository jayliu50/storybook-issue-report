import React from 'react';

export default {
  title: 'User Interface/Input',
};

export const RadioInput = () => (<div></div>);

RadioInput.storyName = 'Radio';

export const TextNumberInput = () => (<div></div>);

TextNumberInput.storyName = 'Text (Number)';

export const SelectInput = () => (<div></div>);

SelectInput.storyName = 'Select';

export const CheckboxInput = () => (<div></div>);

CheckboxInput.storyName = 'Checkbox';

const SliderInputTemplate = ({ opacity }) => (<div></div>);

export const SliderInput = SliderInputTemplate.bind({});

SliderInput.storyName = 'Slider';

SliderInput.args = {
  opacity: 15,
};

SliderInput.argTypes = {
  opacity: {
    control: { type: 'range', min: 0, max: 100, step: 5 },
  },
};

export const ButtonControl = () => (<div></div>);

ButtonControl.storyName = 'Buttons';

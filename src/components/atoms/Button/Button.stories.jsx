import React from 'react';

import {Button} from './Button';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        color: {control: "color"},
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Button',
};

export const NotPrimary = Template.bind({});
NotPrimary.args = {
    label: "Button",
    isPrimary: false
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
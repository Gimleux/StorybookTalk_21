import React from "react";

import {Menu} from "./Menu";

export default {
    title: 'Menu/Menu',
    component: Menu,
    argTypes: {
        primaryColor: {control: "color"},
        secondaryColor: {control: 'color'},
    },
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const InterfaceVisible = Template.bind({});
InterfaceVisible.args = {
    interfaceVisible: true
}
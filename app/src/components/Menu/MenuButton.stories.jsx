import {MenuButton} from "./MenuButton";
import React from "react";

export default {
    title: 'Menu/MenuButton',
    component: MenuButton,
    argTypes: {
        color: {control: "color"},
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
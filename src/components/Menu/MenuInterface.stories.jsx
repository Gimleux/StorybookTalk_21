import React from "react";

import MenuInterface from "./MenuInterface";

export default {
    title: "Menu/MenuInterface",
    component: MenuInterface,
    argTypes: {
        labelColor: {control: "color"},
        backgroundColor: {control: "color"}
    }
};

const Template = (args) => <MenuInterface {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const Small = Template.bind({});
Small.args = {
    width: "260px",
}
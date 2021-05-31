import React from "react";

import Menu from "./Menu";

export default {
    title: "Menu/Menu",
    component: Menu,
    argTypes: {
        labelColor: {control: "color"},
        backgroundColor: {control: "color"}
    }
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const Small = Template.bind({});
Small.args = {
    minHeight: "150px",
    width: "30%",
}
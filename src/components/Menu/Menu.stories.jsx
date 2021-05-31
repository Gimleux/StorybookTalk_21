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
Default.args = {
    labelColor: "#f6f6f6",
    backgroundColor: "#00A82D"
}

export const Small = Template.bind({});
Small.args = {
    minHeight: "150px",
    width: "30%",
    labelColor: "#f6f6f6",
    backgroundColor: "#00A82D"
}
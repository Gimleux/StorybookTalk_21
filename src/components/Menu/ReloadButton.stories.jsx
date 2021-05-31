import React from "react";

import {ReloadButton} from "./ReloadButton";

export default {
    title: 'Menu/ReloadButton',
    component: ReloadButton,
    argTypes: {
        color: {control: "color"},
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <ReloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    onClick: ()=> alert("Clicked New Quote")
};
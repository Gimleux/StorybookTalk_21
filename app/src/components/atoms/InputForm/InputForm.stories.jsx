import React from "react";

import {InputForm} from "./InputForm";

export default {
    title: "Atoms/InputForm",
    component: InputForm,
    argTypes: {
        labelColor: {control: "color"},
        buttonLabelColor: {control: "color"},
        buttonBackgroundColor: {control: "color"},
    }
}

const Template = (args) => <InputForm {...args}/>

export const Default = Template.bind({})
Default.args = {
    label: "InputLabel",
    inputId: "inputId"
}
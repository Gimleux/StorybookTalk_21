import React from 'react';

import {Quote} from "./Quote";

export default {
    title: "Content/Quote",
    component: Quote
};

const Template = (args) => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
    quote: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
    cite: "J.R.R. Tolkien"
};

const CenteredTemplate = (args) => (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Quote {...args} />
    </div>
);

export const Centered = CenteredTemplate.bind({});
Centered.args = {
    quote: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
    cite: "J.R.R. Tolkien"
};
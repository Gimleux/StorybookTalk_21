import React from "react";
import PropTypes, {string} from "prop-types";
import {Button} from "../atoms/Button/Button";
import Menu from "./Menu";

export const MenuButton = ({
                               position,
                               bottom,
                               left,
                               ...props
                           }) => {
    return (
        <div
            style={{
                position: position,
                bottom: bottom,
                left: left
            }}
        >
            <Button
                label={"Interact"}
                size={"large"}
                {...props}
            />
            <Menu/>
        </div>
    )
}

MenuButton.propTypes =
    {
        /**
         * How shall the Button be positioned?
         */
        position: PropTypes.oneOf(["fixed", "absolute", "sticky"]),
        /**
         * How far shall the Button's position differ from the page bottom?
         */
        bottom: string,
        /**
         * How far shall the Button's position differ from the left page side?
         */
        left: string
    }

MenuButton.defaultProps =
    {
        position: "fixed",
        bottom: "16px",
        left: "16px"
    }
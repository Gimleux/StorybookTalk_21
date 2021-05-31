import React from "react";
import PropTypes, {string} from "prop-types";
import {Button} from "../atoms/Button/Button";

export const MenuButton = ({position, bottom, left, color, backgroundColor, onClick, ...props}) => {
    return (
        <div
            style={{
                position: position,
                bottom: bottom,
                left: left
            }}
        >
            <Button
                isPrimary={true}
                label={"Interact"}
                size={"large"}
                color={color}
                backgroundColor={backgroundColor}
                onClick={onClick}
                {...props}
            />
        </div>
    )
}

MenuButton.propTypes = {
    /**
     * What text color to use
     */
    color: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How shall the Button be positioned?
     */
    position: PropTypes.oneOf(["fixed", "absolute", "sticky", "relative"]),
    /**
     * How far shall the Button's position differ from the page bottom?
     */
    bottom: string,
    /**
     * How far shall the Button's position differ from the left page side?
     */
    left: string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
}

MenuButton.defaultProps = {
    position: "fixed",
    bottom: "16px",
    left: "16px",
    color: null,
    backgroundColor: null,
    onClick: undefined,
}
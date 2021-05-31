import React, {useState} from "react";
import PropTypes, {string} from "prop-types";
import "./menuInterface.css"
import {InputForm} from "../atoms/InputForm/InputForm";

export default function MenuInterface(props)  {
    if (!props.visible) return <></>
    return(
        <div
            className="menuInterface"
            style={{
                backgroundColor: props.backgroundColor,
                minHeight: props.minHeight,
                width: props.width,
                position: props.position,
                bottom: props.bottom,
                left: props.left
            }}
        >
            <div>
                <InputForm
                    label="Please enter your TheOneRing-API-Key:"
                    labelColor={props.labelColor}
                    buttonBackgroundColor={props.labelColor}
                    buttonLabelColor={props.backgroundColor}
                    inputID={"input-api"}
                    onClick={() => console.log("API: " + document.getElementById("input-api").innerText)}
                />
            </div>
        </div>
    )
}

MenuInterface.propTypes = {
    /**
     * Is the interface visible?
     */
    visible: PropTypes.bool,
    /**
     * What label color to use
     */
    labelColor: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * What height should the menu box at least have?
     */
    minHeight: PropTypes.string,
    /**
     * What width should the menu box at have?
     */
    width: PropTypes.string,
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
    left: string
}

MenuInterface.defaultProps = {
    visible: true,
    labelColor: "#f6f6f6",
    backgroundColor: "#00A82D",
    minHeight: null,
    width: null,
    position: "relative",
    bottom: null,
    left: null
}
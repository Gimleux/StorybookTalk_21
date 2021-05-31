import React from "react";
import PropTypes from "prop-types";
import "./menu.css"
import {InputForm} from "../atoms/InputForm/InputForm";

export default function Menu(props)  {
    return(
        <div
            className="menu"
            style={{
                backgroundColor: props.backgroundColor,
                minHeight: props.minHeight,
                width: props.width
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

Menu.propTypes = {
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
}

Menu.defaultProps = {
    labelColor: "#f6f6f6",
    backgroundColor: "#00A82D",
    minHeight: null,
    width: null
}
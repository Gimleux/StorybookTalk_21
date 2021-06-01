import React from "react";
import "./inputForm.css"
import {Button} from "../Button/Button";
import PropTypes from "prop-types";

export const InputForm = (props) => {
    return(
        <div className="inputFormContainer">
            <p
                className="inputFormLabel"
                style={{
                    color: props.labelColor
                }}
            >
                {props.label}
            </p>
            <input type="text" id="apiKey" name="apiKey"/>
            <Button
                style={{
                    marginTop: "10px",
                }}
                label="Submit"
                onClick={props.onClick}
                color={props.buttonLabelColor}
                backgroundColor={props.buttonBackgroundColor}
            />
        </div>
    )
}

InputForm.propTypes = {
    /**
     * Label contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func.isRequired,
    /**
     * What label color to use
     */
    labelColor: PropTypes.string,
    /**
     * Input field ID
     */
    inputId: PropTypes.string,
    /**
     * What button label color to use
     */
    buttonLabelColor: PropTypes.string,
    /**
     * What button background color to use
     */
    buttonBackgroundColor: PropTypes.string,
}

InputForm.defaultProps = {
    label: "",
    onClick: undefined,
    inputId: null,
    labelColor: null,
    buttonLabelColor: null,
    buttonBackgroundColor: null,
}
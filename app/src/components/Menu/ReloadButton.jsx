import React from "react";
import {Button} from "../atoms/Button/Button";
import PropTypes from "prop-types";

export const ReloadButton = (props) => {
    return (
        <Button
            label={"New Quote"}
            color={props.color}
            backgroundColor={props.backgroundColor}
            onClick={props.onClick}
        />
    )
}

ReloadButton.propTypes = {
    /**
     * New Quote Function
     */
    onClick: PropTypes.func,
    /**
     * What text color to use
     */
    color: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
}

ReloadButton.defaultProps = {
    onClick: undefined,
    color: null,
    backgroundColor: null,
}
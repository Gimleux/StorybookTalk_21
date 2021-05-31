import React, {useState} from "react";
import {MenuButton} from "./MenuButton";
import MenuInterface from "./MenuInterface";
import PropTypes from "prop-types";

export const Menu = (props) => {
    const [interfaceIsVisible, setInterfaceIsVisible] = useState(props.interfaceVisible)
    return (
        <>
            <MenuButton
                color={props.secondaryColor}
                backgroundColor={props.primaryColor}
                onClick={() => setInterfaceIsVisible(!interfaceIsVisible)}
            />
            <MenuInterface
                visible={interfaceIsVisible}
                width="25%"
                position="absolute"
                bottom="32px"
                left="125px"
                labelColor={props.secondaryColor}
                backgroundColor={props.primaryColor}
            />
        </>
    )
}

Menu.propTypes = {
    /**
     * What primary color to use
     */
    primaryColor: PropTypes.string,
    /**
     * What secondary color to use
     */
    secondaryColor: PropTypes.string,
    /**
     * Shall the interface be visible?
     */
    interfaceVisible: PropTypes.bool
}

Menu.defaultProps = {
    primaryColor: "#00A82D",
    secondaryColor: "#f6f6f6",
    interfaceVisible: false
}
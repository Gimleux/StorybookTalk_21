import React, {useState} from "react";
import {MenuButton} from "./MenuButton/MenuButton";
import MenuInterface from "./MenuInterface/MenuInterface";
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
                width="260px"
                labelColor={props.secondaryColor}
                backgroundColor={props.primaryColor}
                setNewQuote={props.setNewQuote}
                style={{
                    position:"absolute",
                    bottom:"32px",
                    left:"125px"
                }}
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
    interfaceVisible: PropTypes.bool,
    /**
     * New Quote Function
     */
    setNewQuote: PropTypes.func,
}

Menu.defaultProps = {
    primaryColor: "#00A82D",
    secondaryColor: "#f6f6f6",
    interfaceVisible: false,
    setNewQuote: undefined
}
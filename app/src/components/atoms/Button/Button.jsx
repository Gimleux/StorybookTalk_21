import React from "react";
import PropTypes from "prop-types";
import './button.css';

export const Button = ({size, color, backgroundColor, onClick, label, isPrimary, ...buttonProps}) => {
    const mode = isPrimary ? 'atom-button--primary' : 'atom-button--secondary';
    console.log("Button onclick:")
    console.log(onClick)
    return (
        <button
            type="button"
            className={['atom-button', `atom-button--${size}`, mode].join(' ')}
            style={{
                color: color,
                backgroundColor: backgroundColor,
                ...buttonProps?.style
            }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    isPrimary: PropTypes.bool,
    /**
     * What text color to use
     */
    color: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Text that shall be displayed on the button
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
}

Button.defaultProps = {
    isPrimary: true,
    color: null,
    backgroundColor: null,
    label: "Button",
    onClick: undefined,
    size: "medium"
}
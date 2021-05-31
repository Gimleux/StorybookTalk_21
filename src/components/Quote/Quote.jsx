import React from "react";
import PropTypes from "prop-types";
import "./quote.css"

export const Quote = (props) => {
    return(
        <>
            <blockquote>{props.quote}</blockquote>
            <cite>- {props.cite}</cite>
        </>
    )
}

Quote.propTypes = {
    /**
     * The quote which shall be displayed
     */
    quote: PropTypes.string,
    /**
     * The person who said it
     */
    cite: PropTypes.string

}

Quote.defaultProps = {
    quote: "",
    cite: ""
}
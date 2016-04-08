/* eslint max-statements:0,complexity:0,no-invalid-this:0 */
import React, { createClass, PropTypes } from "react";
import getStyles from '../utils/getStyles';

export const BaseComponent = {
    propTypes: {
        textColor: PropTypes.string,
        textFont: PropTypes.string,
        bgColor: PropTypes.string,
        bgImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        bgDarken: PropTypes.number
    },

    getDefaultProps(){
        return {
            bgDarken: 0
        }
    },

    getStyles: getStyles,

    render() {
        return null;
    }
};

const Base = createClass(BaseComponent);

Base.Mixin = {
    getStyles
};

export default Base;

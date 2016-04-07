import PropTypes from 'react/lib/ReactPropTypes'

export default {
    displayName: 'Slide',

    getDefaultProps() {
        return {
            logo: true
        };
    },

    propTypes: {
        hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        children: PropTypes.node,
        notes: PropTypes.string,
        slideIndex: PropTypes.number,
        lastSlide: PropTypes.number
    }
};

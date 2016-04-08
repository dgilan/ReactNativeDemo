import PropTypes from 'react/lib/ReactPropTypes'

export default {
    displayName: 'Slide',

    contextTypes: {
        styles: PropTypes.object
    },

    propTypes: {
        hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        children: PropTypes.node,
        notes: PropTypes.string,
        slideIndex: PropTypes.number,
        lastSlide: PropTypes.number
    }
};

import PropTypes from 'react/lib/ReactPropTypes'

export default {
    propTypes: {
        step: PropTypes.number.isRequired,
        onUpdateStep: PropTypes.func.isRequired,
        image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    },

    contextTypes: {
        styles: PropTypes.object.isRequired
    }

}

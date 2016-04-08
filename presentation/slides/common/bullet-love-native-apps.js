import PropTypes from 'react/lib/ReactPropTypes'

export default {
    propTypes: {
        image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }
}

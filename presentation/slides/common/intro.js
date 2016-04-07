import PropTypes from 'react/lib/ReactPropTypes'

export default {
    propTypes: {
        logo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }
}
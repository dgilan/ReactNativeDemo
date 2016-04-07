import PropTypes from 'react/lib/ReactPropTypes'

export default {
    propTypes: {
        like: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }
}

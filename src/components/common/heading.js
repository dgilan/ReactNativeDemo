import PropTypes from 'react/lib/ReactPropTypes'

export default {
    propTypes: {
        children: PropTypes.node,
        size: PropTypes.number,
        lineHeight: PropTypes.number
    },

    contextTypes: {
        styles: PropTypes.object
    },

    getDefaultProps(){
        return {
            size: 1,
            lineHeight: 1
        }
    }
}

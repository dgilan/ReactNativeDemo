import PropTypes from 'react/lib/ReactPropTypes'

export default {
    contextTypes: {
        styles: PropTypes.object.isRequired
    },

    getInitialState(){
        return {
            count: 1,
            text: "1"
        }
    },

    onClick() {
        this.setState({
            count: this.state.count + (Number(this.state.text) || 1)
        });
    }

}

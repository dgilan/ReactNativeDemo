import extend from 'lodash.assign'

export default function (component, props) {

    const newProps = extend({}, props)

    if (typeof props.getDefaultProps === 'function' && typeof component.getDefaultProps === 'function') {
        //need merge results
        newProps.getDefaultProps = ()=> {
            return extend({}, component.getDefaultProps(), props.getDefaultProps())
        }
    }

    if (typeof props.getInitialState === 'function' && typeof component.getInitialState === 'function') {
        //need merge results
        newProps.getInitialState = ()=> {
            return extend({}, component.getInitialState(), props.getInitialState())
        }
    }

    if (props.propTypes && component.propTypes) {
        newProps.propTypes = extend({}, component.propTypes, props.propTypes)
    }

    if (props.contextTypes && component.contextTypes) {
        newProps.contextTypes = extend({}, component.contextTypes, props.contextTypes)
    }

    return extend({}, component, newProps)
}
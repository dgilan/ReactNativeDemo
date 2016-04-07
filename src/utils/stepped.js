import { register, unregister } from './steps';

export default (React, maxStep) => {
    return (DecoratedComponent) => {
        return React.createClass({

            displayName: 'StepDecorator',

            propTypes: {
                index: React.PropTypes.number.isRequired
            },

            childContextTypes: {
                onUpdateStep: React.PropTypes.func,
            },

            getChildContext() {
                return {
                    onUpdateStep: this.onUpdateStep,
                };
            },

            getInitialState(){
                return {
                    step: 0,
                    maxStep: maxStep - 1
                }
            },

            componentWillMount() {
                register(this.props.index, {
                    prev: () => {
                        if (this.state.step > 0) {
                            this.setState({step: this.state.step - 1});
                            return false;
                        }
                        return true;
                    },
                    next: () => {
                        if (this.state.step < this.state.maxStep) {
                            this.setState({step: this.state.step + 1});
                            return false;
                        }
                        return true;
                    },
                    reset: ()=> {
                        this.setState({step: 0})
                    }
                });
            },

            componentWillUnmount() {
                unregister(this.props.index);
            },

            onUpdateStep(step) {
                if (step >= 0 && step <= this.state.maxStep) {
                    this.setState({step});
                }
            },

            render(){
                return <DecoratedComponent {...this.props} step={this.state.step} onUpdateStep={this.onUpdateStep}/>;
            }
        })
    }
}

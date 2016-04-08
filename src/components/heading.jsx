/*global window*/

import React, { createClass } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import assign from 'lodash.assign'
import ReactTransitionGroup from 'react-addons-transition-group';
import extend from '../utils/extend'
import { nextStep, prevStep } from '../utils/steps'

import Base, {BaseComponent} from "./base";
import Progress from "../progress";
import HeadingBaseComponent from './common/heading'

const Heading = createClass(extend(BaseComponent, HeadingBaseComponent, {
    getInitialState(){
        return {
            scale: 1,
            height: 16
        }
    },

    componentDidMount() {
        this.resize();
        window.addEventListener('load', this.resize);
        window.addEventListener('resize', this.resize);
    },

    componentWillUnmount() {
        window.removeEventListener('load', this.resize);
        window.removeEventListener('resize', this.resize);
    },

    componentWillReceiveProps() {
        this.resize();
    },

    resize() {
        if (this.props.fit) {
            const text = ReactDOM.findDOMNode(this.refs.text);
            const container = ReactDOM.findDOMNode(this.refs.container);
            text.style.display = 'inline-block';
            const scale = (container.offsetWidth / text.offsetWidth);
            const height = text.offsetHeight * scale;
            text.style.display = 'block';
            this.setState({
                scale,
                height
            });
        }
    },

    render() {
        const { size, lineHeight, fit, style } = this.props;
        const { height, scale } = this.state;

        const Tag = `H${size}`
        const styles = {
            container: {
                display: "block",
                width: "100%",
                height
            },
            text: {
                fontSize: 16,
                display: "block",
                margin: "0",
                padding: "0",
                lineHeight,
                transform: `scale(${scale})`,
                transformOrigin: "center top"
            }
        };
        return fit ?
            <div ref="container"
                 style={[this.context.styles.components.heading[Tag.toLowerCase()], this.getStyles(), styles.container]}>
                    <span ref="text" style={[styles.text, this.props.style]}>
                      {this.props.children}
                    </span>
            </div>
            : React.createElement(Tag, {style: [this.context.styles.components.heading[Tag.toLowerCase()], this.getStyles(), style]}, this.props.children);
    }
}))

export default Radium(Heading);

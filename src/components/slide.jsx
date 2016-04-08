/* global window */

import React from 'react';
import ReactDOM from 'react-dom';
import tweenState from 'react-tween-state';
import Base from './base';
import BaseComponent from './common/slide';
import Transitions from "../mixins/transitions";
import config from "../../presentation/config";
import radium from "radium";
import extend from '../utils/extend';

const Slide = React.createClass(extend(BaseComponent, {
    mixins: [tweenState.Mixin, Base.Mixin, Transitions],

    propTypes: {
        align: React.PropTypes.string,
        presenterStyle: React.PropTypes.object
    },

    contextTypes: {
        styles: React.PropTypes.object
    },

    getDefaultProps() {
        return {
            align: 'center center',
            presenterStyle: {}
        };
    },

    getInitialState() {
        return {
            zoom: 1,
            contentScale: 1
        };
    },

    setZoom() {
        const mobile = window.matchMedia('(max-width: 628px)').matches;
        const content = ReactDOM.findDOMNode(this.refs.content);
        const zoom = (content.offsetWidth / config.width);
        const contentScaleY = (content.parentNode.offsetHeight / config.height);
        const contentScaleX = (content.parentNode.offsetWidth / config.width);
        const contentScale = mobile ? 1 : Math.min(contentScaleY, contentScaleX);
        this.setState({
            zoom: zoom > 0.6 ? zoom : 0.6,
            contentScale: contentScale < 1 ? contentScale : 1
        });
    },

    componentDidMount() {
        this.setZoom();
        window.addEventListener("load", this.setZoom);
        window.addEventListener("resize", this.setZoom);
    },

    componentWillUnmount() {
        window.removeEventListener("resize", this.setZoom);
    },

    render() {
        const styles = {
            outer: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                backgroundColor: this.context.styles.global.body.view.backgroundColor ?
                    this.context.styles.global.body.view.backgroundColor : ""
            },
            inner: {
                display: "flex",
                position: "relative",
                flex: 1,
                alignItems: this.props.align ? this.props.align.split(" ")[1] : "center",
                justifyContent: this.props.align ? this.props.align.split(" ")[0] : "center"
            },
            content: {
                flex: 1,
                maxHeight: config.height,
                maxWidth: config.width,
                fontSize: 16 * this.state.zoom,
                transform: "scale(" + this.state.contentScale + ")",
                padding: this.state.zoom > 0.6 ? config.margin : 10
            }
        };
        return (
            <div className="spectacle-slide"
                 ref="slide"
                 style={[
          styles.outer,
          this.getStyles(),
          this.getTransitionStyles(),
          this.props.presenterStyle]}>
                <div style={[styles.inner]}>
                    <div ref="content"
                         className="spectacle-content"
                         style={[styles.content, this.context.styles.components.content]}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}));

export default radium(Slide);

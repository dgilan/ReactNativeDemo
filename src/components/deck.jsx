/* eslint new-cap:0, max-statements:0, react/no-did-mount-set-state:0 */
/* global window document localStorage */

import React, { createClass } from 'react';
import { cloneElement } from 'react/lib/ReactElement'
import Radium from 'radium';
import assign from 'lodash.assign'
import ReactTransitionGroup from 'react-addons-transition-group';
import extend from '../utils/extend'
import Progress from "../progress";
import BaseComponent from './common/deck'
import { nextStep, prevStep } from '../utils/steps'

const Style = Radium.Style;
const TransitionGroup = Radium(ReactTransitionGroup);

const Deck = createClass(extend(BaseComponent, {
    propTypes: {
        transition: React.PropTypes.array,
        transitionDuration: React.PropTypes.number,
        progress: React.PropTypes.oneOf(['pacman', 'bar', 'number', 'none'])
    },

    getDefaultProps(){
        return {
            transitionDuration: 500,
            progress: 'pacman'
        }
    },

    _attachEvents() {
        window.addEventListener("storage", this._goToSlide);
        window.addEventListener("keydown", this._handleKeyPress);
    },

    _detachEvents() {
        window.removeEventListener("storage", this._goToSlide);
        window.removeEventListener("keydown", this._handleKeyPress);
    },

    _setStorage(slide) {
        localStorage.setItem('spectacle-slide', JSON.stringify({
            slide,
            forward: false,
            time: Date.now()
        }));
    },

    _handleKeyPress(e) {
        const event = window.event ? window.event : e;
        // left, page down
        if (event.keyCode === 37 || event.keyCode === 33) {
            this._prevSlide();
        }
        // right, page up
        if (event.keyCode === 39 || event.keyCode === 34) {
            this._nextSlide();
        }
        if (event.keyCode === 79 && !event.ctrlKey && !event.metaKey) { // o
            this._toggleOverviewMode();
        }
        if (event.keyCode === 80 && !event.ctrlKey && !event.metaKey) { // o
            this._togglePresenterMode();
        }
    },

    _getTouchEvents() {
        const self = this;

        return {
            onTouchStart(e) {
                self.touchObject = {
                    startX: e.touches[0].pageX,
                    startY: e.touches[0].pageY
                };
            },
            onTouchMove(e) {
                const direction = self._swipeDirection({
                    x1: self.touchObject.startX,
                    x2: e.touches[0].pageX,
                    y1: self.touchObject.startY,
                    y2: e.touches[0].pageY
                });

                self.touchObject = {
                    startX: self.touchObject.startX,
                    startY: self.touchObject.startY,
                    endX: e.clientX,
                    endY: e.clientY,
                    length: Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2))),
                    direction
                };

                if (direction !== 0) {
                    e.preventDefault();
                }
            },
            onTouchEnd(e) {
                self._handleSwipe(e);
            },
            onTouchCancel(e) {
                self._handleSwipe(e);
            }
        };
    },

    _handleClick(e) {
        if (this.clickSafe === true) {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopPropagation();
        }
    },

    _handleSwipe() {
        if (typeof (this.touchObject.length) !== "undefined" && this.touchObject.length > 44) {
            this.clickSafe = true;
        } else {
            this.clickSafe = false;
        }

        if (Math.abs(this.touchObject.length) > 20) {
            if (this.touchObject.direction === 1) {
                this._nextSlide();
            } else if (this.touchObject.direction === -1) {
                this._prevSlide();
            }
        }

        this.touchObject = {};
    },

    _swipeDirection(touch) {
        const xDist = touch.x1 - touch.x2;
        const yDist = touch.y1 - touch.y2;
        const r = Math.atan2(yDist, xDist);
        let swipeAngle = Math.round(r * 180 / Math.PI);

        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return 1;
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return 1;
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return -1;
        }

        return 0;
    },

    _renderSlide() {
        const slide = this._getSlideIndex();
        const child = this.props.children[slide];
        return cloneElement(child, {
            key: slide,
            hash: this.context.slide,
            slideIndex: slide,
            lastSlide: this.state.lastSlide,
            transition: child.props.transition.length ?
                child.props.transition :
                this.props.transition,
            transitionDuration: child.props.transition.transitionDuration ?
                child.props.transitionDuration :
                this.props.transitionDuration
        });
    },

    _prevSlide() {
        BaseComponent._prevSlide.call(this)
        const slide = this._getSlideIndex()

        if (prevStep(slide)) {
            if (slide > 0) {
                this.context.router.replaceWith(`/${this._getHash(slide - 1)}${this._getSuffix()}`);
                this._setStorage(this._getHash(slide - 1))
            }
        }
    },

    _nextSlide() {
        BaseComponent._nextSlide.call(this)
        const slide = this._getSlideIndex()

        if (nextStep(slide)) {
            if (slide < this.props.children.length - 1) {
                this.context.router.replaceWith(`/${this._getHash(slide + 1)}${this._getSuffix()}`);
                this._setStorage(this._getHash(slide + 1))
            }
        }
    },

    render() {
        const globals = this.context.export ? {
            body: assign(this.context.styles.global.body.view, this.context.styles.global.body.text, {
                minWidth: 1100,
                minHeight: 850,
                overflow: "auto"
            })
        } : {};

        const styles = {
            deck: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            },
            transition: {
                height: "100%",
                width: "100%",
                perspective: 1000,
                transformStyle: "flat"
            }
        };

        return (
            <div
                className='spectacle-deck'
                style={[styles.deck]}
                onClick={this._handleClick}
                {...this._getTouchEvents()}>
                <TransitionGroup component="div" style={[styles.transition]}>
                    {this._renderSlide()}
                </TransitionGroup>
                {!this.context.export ? <Progress
                    items={this.props.children}
                    currentSlide={this._getSlideIndex()}
                    type={this.props.progress}/> : ""}
                <Style rules={assign(this.context.styles.global, globals)}/>
            </div>
        );
    }
}))

export default Radium(Deck);

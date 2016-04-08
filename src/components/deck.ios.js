/* eslint new-cap:0, max-statements:0, react/no-did-mount-set-state:0 */

import React, { createClass, StyleSheet, Text, View, cloneElement  } from 'react-native'
import Swiper from 'react-native-swiper'
import assign from 'lodash.assign'
import extend from '../utils/extend'
import BaseComponent from './common/deck'
import { nextStep, prevStep, reset } from '../utils/steps'

const Deck = createClass(extend(BaseComponent, {

    _lastSlide: 0,

    _prevSlide() {
        BaseComponent._prevSlide.call(this)
        const slide = this._getSlideIndex()

        if (prevStep(slide)) {
            if (slide > 0) {

            }
        }
    },

    _nextSlide() {
        BaseComponent._nextSlide.call(this)
        const slide = this._getSlideIndex()

        return nextStep(slide);
    },

    _renderSlide() {
        const slide = this._getSlideIndex();
        const child = this.props.children[slide];
        return cloneElement(child, {
            key: slide,
            hash: this.context.slide,
            slideIndex: slide,
            lastSlide: this.state.lastSlide
        });
    },

    onMove(e){
        if (this._blockedSlide) {
            return false;
        }
        if (e.nativeEvent.locationX > this._x) {
            if (prevStep(this._getSlideIndex())) {
                this._blockedSlide = true;
                return false;
            }
        }
    },

    onTouchStart(e){
        this._x = e.nativeEvent.locationX;
        this._blockedSlide = false;
        return !nextStep(this._getSlideIndex());
    },

    onTouchEnd(e, state){
        if (this._lastSlide !== state.index) {
            reset(this._lastSlide)
        }
        this._lastSlide = state.index;
    },

    _getSlideIndex() {
        return this._lastSlide;
    },

    render() {

        const styles = StyleSheet.create(this.context.styles.global.body);


        return (
            <View onStartShouldSetResponderCapture={this.onTouchStart} style={styles.view}>
                <Swiper onMomentumScrollEnd={this.onTouchEnd} loop={false}>
                    {this.props.children}
                </Swiper>
            </View>
        );
    }
}))

export default Deck

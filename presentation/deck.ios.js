import React, { Component, View } from 'react-native'
import Deck from '../src/components/deck'
//import Slide from '../src/components/slide'
import slides from './slides'

export default class extends Component {

    renderSlides() {
        return slides.map((slide, index) => {

            if (slide.component) {
                return (
                    <slide.component {...slide.props} index={index} key={index}/>
                )
                //return (
                //    <Slide {...slide.slideProps} key={index}>
                //        <slide.component {...slide.props} index={index} key={index}/>
                //    </Slide>
                //);
            }
            return <View {...slide.slideProps} />;
        });
    }

    render() {
        return (
            <Deck >
                { this.renderSlides() }
            </Deck>
        );
    }
}

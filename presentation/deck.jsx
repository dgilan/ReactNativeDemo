import React from 'react'
import { Deck, Slide } from '../src/spectacle'
import slides from './slides'

export default class extends React.Component {

    renderSlides() {
        return slides.map((slide, index) => {
            if (slide.component) {
                return (
                    <Slide {...slide.slideProps} key={index}>
                        <slide.component {...slide.props} index={index} key={index}/>
                    </Slide>
                );
            }
            return <Slide {...slide.slideProps} />;
        });
    }

    render() {
        return (
            <Deck transition={['fade']} transitionDuration={800} progress='bar'>
                { this.renderSlides() }
            </Deck>
        );
    }
}

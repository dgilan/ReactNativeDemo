import React, { createClass } from 'react';
import { Row, Col } from 'elemental';
import { Heading, List, ListItem, Image } from '../../src/spectacle';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import stepped from '../../src/utils/stepped'
import BaseComponent from './common/how-web-solved-problems'
import extend from '../../src/utils/extend'
import Lang from '../language/how-web-solved-problems'

const Component = createClass(extend(BaseComponent,{

    renderNativeList() {
        const { step } = this.props;

        const animationForStep = (index, text) => {
            let opacity;
            let textDecoration = 'line-through';
            if (step < index) {
                opacity = 0.3;
            } else {
                opacity = 1;
            }
            if (step > index - 1) {
                textDecoration = 'line-through';
            } else {
                textDecoration = 'none';
            }
            const props = {
                textSize: '2.6em',
                style: {
                    textDecoration
                }
            };
            return (
                <VelocityComponent
                    animation={{
            opacity
          }}>
                    <ListItem {...props}>{ text }</ListItem>
                </VelocityComponent>
            );
        };

        return (
            <List>
                <ListItem textSize='2.6em' style={{ textDecoration: 'line-through' }}>{Lang.REASONS[0]}</ListItem>
                { animationForStep(1, Lang.REASONS[1]) }
                { animationForStep(2, Lang.REASONS[2]) }
            </List>
        );
    },

    renderWebList() {
        const { step } = this.props;


        const firstStep = (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                <Image src={this.props.image} width='70%'/>
            </div>
        );

        const secondStep = (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                <Heading textColor='light' size={1} style={{ fontWeight: '700' }}>
                    ∞
                </Heading>
                <Heading textColor='light' size={2} style={{ fontWeight: '700' }}>
                    {Lang.SOLUTIONS.LIBS}
                </Heading>
            </div>
        );

        const thirdStep = (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                <Heading textColor='light' size={4} style={{ fontWeight: '700' }}>
                    {Lang.SOLUTIONS.HOT.CHANGE}
                </Heading>
                <Heading textColor='light' size={1}>
                    ▾
                </Heading>
                <Heading textColor='light' size={4} style={{ fontWeight: '700' }}>
                    {Lang.SOLUTIONS.HOT.RELOAD}
                </Heading>
            </div>
        );

        const enterAnimation = {
            animation: {
                opacity: 1,
                translateX: '0px'
            }
        };

        const leaveAnimation = {
            animation: {
                opacity: 0,
                translateX: '-40px'
            }
        };

        return (
            <div style={{ position: 'relative' }}>
                <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
                    { step === 0 ? firstStep : null }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
                    { step === 1 ? secondStep : null }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
                    { step === 2 ? thirdStep : null }
                </VelocityTransitionGroup>
            </div>
        );
    },

    render() {
        const styles = {
            header: {
                size: 3,
                textColor: 'darkPrimary',
                style: {
                    marginTop: '-100px',
                    marginBottom: '100px'
                }
            },
            lightHeader: {
                size: 3,
                textColor: 'light',
                style: {
                    marginTop: '-100px',
                    marginBottom: '100px'
                }
            }
        };

        return (
            <div>
                <Row>
                    <Col xs="1/2">
                        <Heading {...styles.header}>{Lang.HEADERS.NATIVE}</Heading>
                        { this.renderNativeList() }
                    </Col>
                    <Col xs="1/2">
                        <Heading {...styles.lightHeader}>
                            {Lang.HEADERS.WEB}
                        </Heading>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', width: '100%' }}>
                                { this.renderWebList() }
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}))

export default stepped(React, 3)(Component)

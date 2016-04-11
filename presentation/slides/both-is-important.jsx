import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image } from '../../src/spectacle';
import Lang from '../language/both-is-important'

const redBluePill = require('../images/red-blue-pill.png');

export default class BothAreImportant extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired,
        onUpdateStep: React.PropTypes.func.isRequired,
    };

    render() {
        const styles = {
            heading: {
                size: 4,
                textColor: 'light',
                marginBottom: '-100px'
            }
        };

        const content = Lang.PROPS.map((item, index)=> {
            return <Heading {...styles.heading} key={index}>{item}</Heading>
        })

        return (
            <Row>
                <Col>
                    {content}
                    <Image src={redBluePill.replace('/', '')} width='300px'/>
                </Col>
            </Row>
        );
    }

}

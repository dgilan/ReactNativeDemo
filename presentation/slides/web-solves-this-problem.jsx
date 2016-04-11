import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image } from '../../src/spectacle';
import Lang from '../language/web-solves-this-problem'

export default class WebSolvesThisProblem extends React.Component {

    static propTypes = {
        image: React.PropTypes.string.isRequired
    };

    render() {
        const styles = {
            image: {
                src: this.props.image,
                width: '30%'
            },
            heading: {
                size: 3,
                textColor: 'light'
            }
        };

        return (
            <div>
                <Row>
                    <Col>
                        <Image {...styles.image} />
                        <Heading {...styles.heading}>
                            {Lang.HEADER_1} <br/> {Lang.HEADER_2}
                        </Heading>
                    </Col>
                </Row>
            </div>
        );
    }

}

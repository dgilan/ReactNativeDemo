import React from 'react';
import { Row, Col } from 'elemental';
import { Image } from '../../src/spectacle';
import stepped from '../../src/utils/stepped';

const images = [
    require('../images/ui-f-count.jpg').replace('/', ''),
    require('../images/ui-f-count-2.jpg').replace('/', ''),
    require('../images/ui-f-count-3.jpg').replace('/', ''),
    require('../images/ui-f-count-4.jpg').replace('/', ''),
    require('../images/ui-f-count-5.jpg').replace('/', ''),
    require('../images/ui-f-count-6.jpg').replace('/', '')
];

@stepped(React, 6)
export default class CountFunction1 extends React.Component {

    static propTypes = {
        step: React.PropTypes.number.isRequired
    };

    render() {
        return (
            <Row>
                <Col>
                    <Image src={images[this.props.step]} width="90%"/>
                </Col>
            </Row>
        );
    }

}
